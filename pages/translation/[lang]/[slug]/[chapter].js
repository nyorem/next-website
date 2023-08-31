import fs from "fs"
import matter from "gray-matter"
import path from "path"
import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect } from "react"
import ReactMarkdown from "react-markdown"
import rehypeRaw from 'rehype-raw'
import { useSwipeable } from "react-swipeable"

import { padWithZerosLike, renderers, scrollToTop } from "utils"
import Meta from "components/Meta"

const Story = ({ meta, source, previous, next }) => {
    const router = useRouter()
    const { lang, slug, chapter } = router.query

    const other       = (lang === "en") ? "jp" : "en"
    const draft       =  meta.draft ? "draft" : ""
    const nextStr     = (lang === "en") ? "Next" : "次"
    const previousStr = (lang === "en") ? "Previous" : "前"

    useEffect(() => {
        const handleKeyDown = ev => {
            if (ev.code === "ArrowLeft" && previous) {
                router.push(`/translation/${lang}/${slug}/${previous}`)
                scrollToTop()
            } else if (ev.code === "ArrowRight" && next) {
                router.push(`/translation/${lang}/${slug}/${next}`)
                scrollToTop()
            }
        }

        window.addEventListener("keydown", handleKeyDown)
        return () => window.removeEventListener("keydown", handleKeyDown)
    }, [router])

    const swipeHandlers = useSwipeable({
        onSwipedRight() {
            if (previous) {
                router.push(`/translation/${lang}/${slug}/${previous}`)
                scrollToTop()
            }
        },
        onSwipedLeft() {
            if (next) {
                router.push(`/translation/${lang}/${slug}/${next}`)
                scrollToTop()
            }
        },
    })

    return (
        <>
            <Meta title={meta.title} />
            <section id="chapter" className="container page" {...swipeHandlers}>
                <article>
                    <header id="header_novel">
                        <div id="title">
                            <h1>{meta.title}</h1>
                        </div>
                        <div id="lang">
                            <Link href={`/translation/${other}/${slug}/${chapter}`} >
                                <img src={`/assets/images/${other}.png`} alt={other} />
                            </Link>
                        </div>
                    </header>
                </article>

                <ReactMarkdown
                    rehypePlugins={[rehypeRaw]}
                    children={source}
                    className={`translation_${lang} ${draft}`}
                    components={renderers}
                />

                <center>
                    {previous &&
                    <Link href={`/translation/${lang}/${slug}/${previous}`} onClick={scrollToTop} >
                        {previousStr}
                    </Link>
                    }

                    {next &&
                    <Link href={`/translation/${lang}/${slug}/${next}`} onClick={scrollToTop} >
                        {nextStr}
                    </Link>
                    }
                </center>
            </section>
        </>
    )
}

export const getStaticProps = async context => {
    const { slug, lang, chapter } = context.params

    const source = await import(`../../../../content/translations/${slug}/${chapter}-${lang}.md`)
    const { content, data } = matter(source.default)

    const files = fs.readdirSync(path.join(process.cwd(), "content/translations", slug))
    const chapterInt = Number(chapter)
    const nchapters = files.length / 2
    const previousChapter = padWithZerosLike(chapterInt - 1, chapter)
    const nextChapter = padWithZerosLike(chapterInt + 1, chapter)

    return {
        props: {
            source   : content,
            meta     : data,
            previous : (chapterInt > 1) ? previousChapter     : null,
            next     : (chapterInt < nchapters) ? nextChapter : null,
        },
    }
}

export const getStaticPaths = () => {
    const isDirectory = path => fs.existsSync(path) && fs.lstatSync(path).isDirectory()

    const stories = fs.readdirSync(path.join(process.cwd(), "content/translations"))
        .filter(p => isDirectory(path.join(process.cwd(), "content/translations", p)))

    const paths = []
    for (const story of stories) {
        fs.readdirSync(path.join(process.cwd(), "content/translations", story))
            .map(file => {
                const slug = story
                const fileWe = file.slice(0, -3)
                const [ chapter, lang ] = fileWe.split("-")
                paths.push({ params: { slug, lang, chapter }})
            })
    }

    return {
        paths,
        fallback: false,
    }
}

export default Story

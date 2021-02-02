import fs from "fs"
import path from "path"
import matter from "gray-matter"
import Link from "next/link"
import ReactMarkdown from "react-markdown/with-html"
import { useRouter } from "next/router"

import { RenderRouterLink } from "utils"
import Meta from "components/Meta"

const Translation = ({ source, meta }) => {
    const router = useRouter()
    const { lang, slug } = router.query
    const other = (lang === "en") ? "jp" : "en"
    const draft =  meta.draft ? "draft" : ""

    return (
        <>
            <Meta title={meta.title} />

            <section id="chapter" className="container page">
                <article>
                    <header id="header_novel">
                        <div id="title">
                            <h1>{meta.title}</h1>
                        </div>
                        <div id="lang">
                            <Link href={`/translation/${other}/${slug}`} >
                                <a><img src={`/assets/images/${other}.png`} alt={other} /></a>
                            </Link>
                        </div>
                    </header>
                </article>

                <ReactMarkdown
                    source={source}
                    escapeHtml={false}
                    className={`translation_${lang} ${draft}`}
                    renderers={ { link: RenderRouterLink } }
                />
            </section>
        </>
    )
}

export const getStaticProps = async context => {
    const { lang, slug } = context.params

    const source = await import(`../../../../content/translations/${slug}-${lang}.md`)
    const { content, data } = matter(source.default)

    return {
        props: {
            source: content,
            meta: data,
        },
    }
}

// TODO: move to utils
const isDirectory = path => fs.existsSync(path) && fs.lstatSync(path).isDirectory()

export const getStaticPaths = () => {
    const paths = fs.readdirSync(path.join(process.cwd(), "content/translations"))
        .filter(p => ! isDirectory(path.join(process.cwd(), "content/translations", p)))
        .map(file => {
            const fileWe = file.slice(0, -3)
            const fileParts = fileWe.split("-")
            const slug = fileParts.slice(0, -1).join("-")
            const lang = fileParts[fileParts.length - 1]

            return { params: { lang, slug } }
        })

    return {
        paths,
        fallback: false,
    }
}

export default Translation

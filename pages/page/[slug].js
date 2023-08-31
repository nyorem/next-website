import fs from "fs"
import matter from "gray-matter"
import path from "path"
import ReactMarkdown from "react-markdown"
import rehypeRaw from 'rehype-raw'

import Meta from "components/Meta"
import { renderers } from "utils"

const MarkdownPage = ({ source, meta }) => {
    return (
        <>
            <Meta title={meta.title} />

            <section id="page" className="container page">
                <article>
                    <ReactMarkdown
                        rehypePlugins={[rehypeRaw]}
                        children={source}
                        components={renderers}
                    />
                </article>
            </section>
        </>
    )
}

export const getStaticProps = async context => {
    const { slug } = context.params

    const source = await import(`../../content/pages/${slug}.md`)
    const { content, data } = matter(source.default)

    return {
        props: {
            source: content,
            meta: data,
        },
    }
}

export const getStaticPaths = () => {
    const paths = fs.readdirSync(path.join(process.cwd(), "content/pages"))
        .map(file => ({ params: { slug: file.slice(0, -3) } }))

    return {
        paths,
        fallback: false,
    }
}

export default MarkdownPage

import matter from "gray-matter"
import Link from "next/link"
import ReactMarkdown from "react-markdown"

const RenderRouterLink = ( { href, children }) => {
    // We use a <Link> for anything not pointing to an external domain
    // and for URLs not starting with /assets
    const useRouterLink = !href.match(/^(https?:)?\/\//) &&
        !href.match(/^\/assets/)

    return (useRouterLink
        ? <Link href={href}><a>{children}</a></Link>
        : <a href={href} target="_blank" rel="noopener noreferrer">{children}</a>
    )
}

const MarkdownPage = ({ source, data }) => {
    return (
        <section id="page" className="container page">
            <article>
                <ReactMarkdown
                    source={source}
                    escapeHtml={false}
                    renderers={ { link: RenderRouterLink } }
                />
            </article>
        </section>
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
    // TODO: get all md files in ../../content/pages directory
    const paths = [
        { params: { slug: "about" } },
        { params: { slug: "research" } },
        { params: { slug: "projects" } },
        { params: { slug: "fun" } },
    ]

    return {
        paths,
        fallback: false,
    }
}

export default MarkdownPage

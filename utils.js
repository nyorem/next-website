import Link from "next/link"

export const RenderRouterLink = ( { href, children }) => {
    // We use a <Link> for anything not pointing to an external domain
    // and for URLs not starting with /assets
    const useRouterLink = !href.match(/^(https?:)?\/\//) &&
        !href.match(/^\/assets/)

    return (useRouterLink
        ? <Link href={href}><a>{children}</a></Link>
        : <a href={href} target="_blank" rel="noopener noreferrer">{children}</a>
    )
}

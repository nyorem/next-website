import Link from "next/link"

export const RenderRouterLink = ( { href, children, title }) => {
    // We use a <Link> for anything not pointing to an external domain
    // and for URLs not starting with /assets
    const useRouterLink = !href.match(/^(https?:)?\/\//) &&
        !href.match(/^\/assets/)

    const isAnnotation = title !== undefined

    if (isAnnotation)
    {
        return <a href={href} title={title}>{children}</a>
    }
    else if (useRouterLink)
    {
        return <Link href={href}>{children}</Link>
    }

    return <a href={href} target="_blank" rel="noopener noreferrer">{children}</a>
}

export const renderers = {
    a:  RenderRouterLink,
}

export const scrollToTop = () => {
    window.scrollTo(0, 0)
}

export const padWithZerosLike = (n, example) => {
    const N = example.length
    const ret = String(n)
    const missing = N - ret.length
    return "0".repeat(missing) + ret
}


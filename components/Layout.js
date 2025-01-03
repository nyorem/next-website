import Link from "next/link"
import Meta from "./Meta"

const Navbar = () => {
    return (
        <nav className="navigation">
            <section className="container">
                <Link className="navigation-title" href="/">home</Link>
                <input type="checkbox" id="menu-control"/>
                <label className="menu-mobile float-right " htmlFor="menu-control">
                    <span className="btn-mobile float-right ">&#9776;</span>
                    <ul className="navigation-list">
                        {/* <li className="navigation-item align-left"><Link className="navigation-link" href="/posts">Posts</Link></li> */}
                        <li className="navigation-item align-left"><Link className="navigation-link" href="/page/about">About Me</Link></li>
                        <li className="navigation-item align-left"><Link className="navigation-link" href="/page/projects">Projects</Link></li>
                        <li className="navigation-item align-left"><Link className="navigation-link" href="/page/fun">Fun</Link></li>
                        <li className="navigation-item align-left"><Link className="navigation-link" href="/page/research">Research</Link></li>
                    </ul>
                </label>
            </section>
        </nav>
    )
}

const Footer = () => {
    return (
        <footer className="footer">
            <section className="container">
                © 2018-2025 · Powered by <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">Next.js</a> with the <a href="https://github.com/luizdepra/hugo-coder/" target="_blank" rel="noopener noreferrer">Coder</a> theme.
            </section>
        </footer>
    )
}

const Layout = ({ children }) => {
    return (
        <>
            <Meta />

            <main className="wrapper">
                <div id="app">
                    <Navbar />

                    <div className="app">
                        {children}
                    </div>
                </div>

                <Footer />
            </main>
        </>
    )
}

export default Layout

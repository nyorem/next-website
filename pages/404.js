import Link from "next/link"

const NotFound = () => {
    return (
        <section className="container centered">
            <div className="error">
                <h1>404</h1>
                <h2>Page Not Found</h2>
                <p>Sorry, this page does not exist.<br />You can head back to the <Link href="/"><a>homepage</a></Link>.</p>
            </div>
        </section>
    )
}

export default NotFound

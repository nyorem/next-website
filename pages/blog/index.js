import fs from "fs"
import matter from "gray-matter"
import path from "path"

import Link from 'next/link'
import Meta from "components/Meta"

export default function BlogHome(props) {
    const { data } = props
    const metadatas = JSON.parse(data)

    return (
        <>
            <Meta title="Blog" />

            <section id="page" className="container page">
                <article>
                    <h1>Blog</h1>
                    <p>
                        Here you can find a list of articles I wrote:
                    </p>
                    <ul>
                        {metadatas.map(({ params }) => (
                            <li key={params.id}>
                                {params.date} - <Link href={`blog/${params.id}`}>
                                    {params.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </article>
            </section>
        </>
    )
}

const formatDate = (date) => {
   return date.toLocaleDateString('en-us', { weekday: "long", year: "numeric", month: "short", day: "numeric"})
}

export async function getStaticProps() {
    const metadatas = fs.readdirSync(path.join(process.cwd(), "content/articles"))
          .map(file => {
              const fullPath = path.join(process.cwd(), "content/articles", file)
              const fileContents = fs.readFileSync(fullPath, "utf-8")

              const { content, data } = matter(fileContents)

              return {
                  params: {
                      id: file.slice(0, -3),
                      title: data.title,
                      date: formatDate(data.date),
                  }
              }
          })

    return {
        props: {
            data: JSON.stringify(metadatas),
        }
    }
}

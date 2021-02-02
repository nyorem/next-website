import Head from 'next/head'

const Meta = ({ title }) => {
    return (
        <Head>
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />

            <link rel="icon" type="image/png" href="/assets/images/favicon-32x32.png" sizes="32x32" />
            <link rel="icon" type="image/png" href="/assets/images/favicon-16x16.png" sizes="16x16" />

            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Fira+Mono:400,700" />
            <link rel="stylesheet" href="//cdn.rawgit.com/necolas/normalize.css/master/normalize.css" />

            <title>{title}</title>
        </Head>
    )
}

Meta.defaultProps = {
    title: "Jocelyn Meyron",
}

export default Meta

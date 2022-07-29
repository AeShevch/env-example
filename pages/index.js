import Head from 'next/head'
require('dotenv').config()

export default function Home({foo}) {
    return (
        <div className="container">
            <Head>
                <title>{foo}</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main>
                {foo}
            </main>
        </div>
    )
}

export async function getServerSideProps(context) {
    return {
        props: {
            foo: process.env.TEST
        }
    }
}

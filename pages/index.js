import Head from 'next/head'
require('dotenv').config()

export default function Home(props) {
    return (
        <div className="container">
            <Head>
                <title>{props.foo}</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main>
                {props.foo}
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

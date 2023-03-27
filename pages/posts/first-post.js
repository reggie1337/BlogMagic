import Link from "next/link"
import Head from "next/head"
import Layout from "../../components/layout";
// import { Head } from "next/document";

export default function FirstPost (){
    return (
        <Layout>
            <Head>
                <title>BLOG</title>
            </Head>
            <h1>
                My Blog
            </h1>
            <h2>
             ONCE UPON A TIZZLE I WALKED UP TO MY NIZZLES AND SAID "YO, CHECK THIS DRIZZLE"
            </h2>
        </Layout>
     );
}
import Head from "next/head";
import Header from "../layouts/Header";

export default function Home() {
  return (
    <>
      <Head>
        <title>Globb Inc.</title>
        <meta name="Globb Inc." content="Created by Blyncnov.com" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
    </>
  );
}

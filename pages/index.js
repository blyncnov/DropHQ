import Head from "next/head";
import About from "../components/OurRestaurant";
import Features from "../components/Features";
import SliderComponent from "../components/SliderComponent";
import Header from "../layouts/Header";

import SlideData from "../data/SlideData";
import Footer from "../layouts/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>DropHQ Inc. | Blyncnov </title>
        <meta name="DropHQ Inc." content="Created by Blyncnov.com" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Features />
      <About />
      <Footer />
    </>
  );
}

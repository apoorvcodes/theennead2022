import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Nav from "../components/navbar";
import Hero from "../components/Hero";
import Banner from "../components/banner";
import Footer from "../components/Footer";
const Home: NextPage = () => {
  return (
    <div className="bg-mainbg min-w-full min-h-screen">
      <Head>
        <title>TheEnnead</title>
        <meta name="description" content="The ennead's official site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <Hero />
      <Footer />
      <Banner />
    </div>
  );
};

export default Home;

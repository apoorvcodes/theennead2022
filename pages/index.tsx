import type { NextPage } from "next";
import Head from "next/head";

import Nav from "../components/navbar";
import Hero from "../components/Hero";
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
    </div>
  );
};

export default Home;

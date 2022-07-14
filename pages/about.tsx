import React from "react";
import Nav from "../components/navbar";
import About from "../components/About";
import Footer from "../components/Footer";
import Banner from "../components/banner";
const Aboutus = () => {
  return (
    <div className="bg-mainbg">
      <Nav />
      <About />
      <Footer />
      <Banner />
    </div>
  );
};

export default Aboutus;

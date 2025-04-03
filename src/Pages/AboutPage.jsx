import React from "react";
import "./Home.css";
import AboutHero from "../Components/AboutHero";
import Navbar from "../Components/Navbar";
import Description from "../Components/Description";
import About from "../Components/About";
import Quote from "../Components/Quote";
import Footer from "../Components/Footer";

const AboutPage = () => {
  return (
    <main className="sec2">
      <Navbar />
      <AboutHero />
      <Description />
      <About />
      <Quote />
      <Footer />
    </main>
  );
};

export default AboutPage;

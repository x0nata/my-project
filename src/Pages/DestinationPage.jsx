// import React from "react";
import Navbar from "../Components/Navbar";
import TourHero from "../Components/TourHero";
// import CTA from "../Components/CTA";
import Quote from "../Components/Quote";
import Footer from "../Components/Footer";
import TourMain from "../Components/TourMain";

const DestinationPage = () => {
  return (
    <main className="sec2">
      <Navbar />
      <TourHero />
      {/* <CTA /> */}
      <TourMain />
      <Quote />
      <Footer />
    </main>
  );
};

export default DestinationPage;

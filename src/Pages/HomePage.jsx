import "../../src/Home.css";
import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
// import CTA from "../Components/CTA";
import Description from "../Components/Description";
import About from "../Components/About";
import Quote from "../Components/Quote";
import Footer from "../Components/Footer";

const HomePage = () => {
  return (
    <>
      <section className="sec-1">
        <Navbar />
        <Hero />
        <Description />
        <About />
        <Quote />
        <Footer />
      </section>
    </>
  );
};

export default HomePage;

/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation, useIsPresent } from "framer-motion";
import Bg4 from "../assets/bg_4.jpg";
import AboutImg from "../assets/about-1.jpg";
import { FaPlay } from "react-icons/fa";
import { Link } from "react-router-dom";

const About = () => {
  const variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  const myRef = useRef(null);
  const isInView = useInView(myRef, { once: true });

  const mainControls = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);
  return (
    <section>
      <div className="my-16">
        <img className="absolute w-full h-[35rem]" src={Bg4} />
        {/* <div className="relative flex items-center justify-center top-[250px]">
          <button className="bg-white rounded-full p-8 ">
            <FaPlay className="text-Orange w-[40px] h-[40px]" />
          </button>
        </div> */}
      </div>

      <div className="container mx-auto ">
        <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-10 lg:justify-between">
          <div className="mx-5 z-50 mt-[350px] bg-white p-5 shadow-xl">
            <img className="h-[460px] lg:h-[640px] w-[1400px]" src={AboutImg} />
          </div>
          <motion.div
            ref={myRef}
            initial="hidden"
            animate={mainControls}
            variants={variants}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="z-50 lg:mt-[500px] pt-10 px-5 lg:px-0"
          >
            <span className="text-[30px] text-Orange my-4 italic">О нас</span>
            <h1 className="text-[30px] sm:text-[40px] font-semibold mb-5">
              Сделайте свой тур по Эфиопии незабываемым и безопасным с нами
            </h1>
            <p className=" sm:text-[18px] text-DarkGray lg:pr-5">
              Откройте для себя чудеса Эфиопии с Агентством Крылья Эфиопии. От
              древних церквей и монастырей до захватывающих дух пейзажей — мы
              гарантируем, что ваше путешествие станет незабываемым.
            </p>
            <Link to="/Destination">
              <button className="bg-Orange px-5 py-3 sm:py-4 sm:px-7 text-white lg:text-lg mt-6 rounded-lg hover:shadow-lg duration-300 ease-in-out">
                Забронируйте свое эфиопское приключение
              </button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

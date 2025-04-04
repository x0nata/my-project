/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Tour from "./Tour";
import { FaMapMarkerAlt, FaBed, FaMountain, FaBath } from "react-icons/fa";
import { motion, useInView, useAnimation, useIsPresent } from "framer-motion";

const TourMain = () => {
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
    <section className="mx-auto container p-5 mt-16">
      <motion.div
        ref={myRef}
        initial="hidden"
        animate={mainControls}
        variants={variants}
        transition={{ duration: 0.8, delay: 0.25 }}
        className="grid grid-cols-1 sm:grid-cols-3 gap-24 "
      >
        <Link to="/AddisIT">
          <Tour
            span=" $450/Person"
            days="5-дневный тур"
            place="Маршрут по Аддис Абебе"
            icon1={<FaMapMarkerAlt />}
            location="Аддис-Абеба, Эфиопия"
            // icon2={<FaBath />}
            // no1="2"
            // icon3={<FaBed />}
            // no2="3"
            // icon4={<FaMountain />}
            // desc="Historical Site"
          />
        </Link>
        <Link to="/Addis1">
          <Tour
            span=" $100/Person"
            days="1-дневный тур"
            place="Энтото"
            icon1={<FaMapMarkerAlt />}
            location="Аддис-Абеба, Эфиопия"
            // icon2={<FaBath />}
            // no1="2"
            // icon3={<FaBed />}
            // no2="3"
            // icon4={<FaMountain />}
            // desc="Mountain Trekking"
          />
        </Link>
        <Link to="/Addis">
          <Tour
            span=" $125/Person"
            days="1-дневный тур"
            place="Однодневный маршрут по Аддис Абебе"
            icon1={<FaMapMarkerAlt />}
            location="Аддис-Абеба, Эфиопия"
            // icon2={<FaBath />}
            // no1="2"
            // icon3={<FaBed />}
            // no2="3"
            // icon4={<FaMountain />}
            // desc="Historical Site"
          />
        </Link>
        <Link to="/Axum">
          <Tour
            span=" $750/Person"
            days="1-дневный тур"
            place="Древний Аксум"
            icon1={<FaMapMarkerAlt />}
            location="Аксум, Эфиопия"
            // icon2={<FaBath />}
            // no1="2"
            // icon3={<FaBed />}
            // no2="3"
            // icon4={<FaMountain />}
            // desc="Cultural Tour"
          />
        </Link>
        <Link to="/ArbaMinch">
          <Tour
            span=" $750/Person"
            days="10-дневный тур"
            place="Арба Минч в Эфиопии "
            icon1={<FaMapMarkerAlt />}
            location="Арба Минч, Эфиопия"
            // icon2={<FaBath />}
            // no1="2"
            // icon3={<FaBed />}
            // no2="3"
            // icon4={<FaMountain />}
            // desc="Cultural Tour"
          />
        </Link>
      </motion.div>
      {/* 
      <div className="flex flex-row items-center gap-2 justify-center mt-16">
        <a
          className="w-[40px] h-[40px] px-3 flex items-center justify-center border-[1px] border-gray-300 rounded-full hover:bg-black hover:text-white ease-in-out duration-300"
          href="#"
        >
          {"<"}
        </a>
        <a
          className="w-[40px] h-[40px] px-3 flex items-center justify-center border-[1px] border-gray-300 rounded-full hover:bg-black hover:text-white ease-in-out duration-300"
          href="#"
        >
          1
        </a>
        <a
          className="w-[40px] h-[40px] px-3 flex items-center justify-center border-[1px] border-gray-300 rounded-full hover:bg-black hover:text-white ease-in-out duration-300"
          href="#"
        >
          2
        </a>
        <a
          className="w-[40px] h-[40px] px-3 flex items-center justify-center border-[1px] border-gray-300 rounded-full hover:bg-black hover:text-white ease-in-out duration-300"
          href="#"
        >
          3
        </a>
        <a
          className="w-[40px] h-[40px] px-3 flex items-center justify-center border-[1px] border-gray-300 rounded-full hover:bg-black hover:text-white ease-in-out duration-300"
          href="#"
        >
          4
        </a>
        <a
          className="w-[40px] h-[40px] px-3 flex items-center justify-center border-[1px] border-gray-300 rounded-full hover:bg-black hover:text-white ease-in-out duration-300"
          href="#"
        >
          5
        </a>
        <a
          className="w-[40px] h-[40px] px-3 flex items-center justify-center border-[1px] border-gray-300 rounded-full hover:bg-black hover:text-white ease-in-out duration-300"
          href="#"
        >
          {">"}
        </a>
      </div> */}
    </section>
  );
};

export default TourMain;

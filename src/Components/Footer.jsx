/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from "react";
import {
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhone,
  FaPaperPlane,
} from "react-icons/fa";
import { motion, useInView, useAnimation, useIsPresent } from "framer-motion";

const Footer = () => {
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
    <section className="foot pb-10 mt-16 border-t-[1px] border-t-gray-300">
      <motion.div
        ref={myRef}
        className="container mx-auto p-5"
        initial="hidden"
        animate={mainControls}
        variants={variants}
        transition={{ duration: 0.8, delay: 0.25 }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-14 lg:mt-32">
          {/* First Footer Section */}
          <div>
            <h1 className="text-[25px] font-bold">О нас</h1>
            <p className="mt-10 text-DarkGray text-lg">
              Откройте для себя красоту и культуру Эфиопии с Агентством Крылья
              Эфиопии. Ваше приключение начинается здесь
            </p>
            <div className="flex flex-row items-center gap-5 mt-6 text-[24px]">
              <div className="bg-Orange rounded-full p-4 text-white hover:-translate-y-2 ease-in-out duration-300 cursor-pointer">
                <a href="#">
                  <FaTwitter />
                </a>
              </div>
              <div className="bg-Orange rounded-full p-4 text-white hover:-translate-y-2 ease-in-out duration-300 cursor-pointer">
                <a href="#">
                  <FaFacebook />
                </a>
              </div>
              <div className="bg-Orange rounded-full p-4 text-white hover:-translate-y-2 ease-in-out duration-300 cursor-pointer">
                <a href="#">
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>

          {/* Second Footer Section */}
          <div className="lg:ml-10">
            <h1 className="text-[25px] font-bold">Информация</h1>
            <div className="text-DarkGray text-[18px] flex flex-col gap-7 mt-10">
              <a href="#">Онлайн-запрос</a>
              <a href="#">Общие вопросы</a>
              <a href="#">Условия бронирования</a>
              <a href="#">Политика конфиденциальности</a>
              <a href="#">Политика возврата средств</a>
              <a href="#">Свяжитесь с нами</a>
            </div>
          </div>

          {/* Third Footer Section */}
          <div className="lg:ml-10">
            <h1 className="text-[25px] font-bold">Опыт</h1>
            <div className="text-DarkGray text-[18px] flex flex-col gap-7 mt-10">
              <a href="#">Отели и рестораны</a>
              <a href="#">Исторические места и достопримечательности</a>
              <a href="#">Природа</a>
              <a href="#">Культурные туры</a>
            </div>
          </div>

          {/* Fourth Footer Section */}
          <div className="lg:ml-10">
            <h1 className="text-[25px] font-bold">Есть вопросы?</h1>
            <div className="text-DarkGray text-[18px] flex flex-col gap-7 mt-10">
              <div className="flex flex-row items-center">
                <FaMapMarkerAlt className="text-Orange text-xl" />
                <p className="ml-5">Аддис-Абеба, Эфиопия</p>
              </div>
              <div className="flex flex-row items-center">
                <FaPhone className="text-Orange text-xl" />
                <p className="ml-5">+251994717954</p>
              </div>
              <div className="flex flex-row items-center">
                <FaPaperPlane className="text-Orange text-xl" />
                <p className="ml-5">info@solasttravel.com</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Footer;

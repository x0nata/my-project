import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation, useIsPresent } from "framer-motion";
import { Link } from "react-router-dom";

const ContactHero = () => {
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
    <section className="h-screen container mx-auto flex flex-col items-center">
      <motion.div
        ref={myRef}
        initial="hidden"
        animate={mainControls}
        variants={variants}
        transition={{ duration: 0.8, delay: 0.25 }}
        className="text-xl text-white font-light text-center mt-[300px] sm:mt-[420px]"
      >
        <Link
          to="/"
          className="inline-block mr-5 hover:text-Orange ease-in-out duration-300"
        >
          Главная страница {">"}
        </Link>
        <p className="inline-block">Контакты {">"}</p>
        <p className="text-[54px] mt-5 font-bold">Контакты</p>
      </motion.div>
    </section>
  );
};

export default ContactHero;

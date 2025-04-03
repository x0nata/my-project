/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation, useIsPresent } from "framer-motion";
import { Link } from "react-router-dom";

const Description = () => {
  const variants = {
    hidden: { opacity: 0, y: 20 },
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
    <section className="container mx-auto p-5 relative top-10 sm:mt-32 xl:mt-44">
      <div className="flex flex-col-reverse lg:flex lg:flex-row items-center lg:space-x-24">
        {/* Grid Section */}
        <motion.div
          ref={myRef}
          className="mt-6 lg:mt-0 w-full lg:w-[50%] grid grid-cols-1 sm:grid-cols-2 gap-8"
          initial="hidden"
          animate={mainControls}
          variants={variants}
          transition={{ duration: 0.8, delay: 0.25 }}
        >
          <div className="bg-Color1">
            <h1 className="text-white text-xl p-6 font-semibold">Activities</h1>
            <p className="text-Text1 text-lg px-6 h-[250px]">
              Яркие впечатления Откройте для себя богатство культуры и истории
              Эфиопии благодаря нашим уникальным турам
            </p>
          </div>
          <div className="bg-Color2">
            <h1 className="text-white text-xl p-6 font-semibold">
              Travel Arrangements
            </h1>
            <p className="text-Text1 text-lg px-6 h-[250px]">
              Ваше путешествие – наша забота Мы предлагаем безупречную
              организацию поездок, чтобы вы могли расслабиться и получать
              удовольствие
            </p>
          </div>
          <div className="bg-Color3">
            <h1 className="text-white text-xl p-6 font-semibold">
              Private Guide
            </h1>
            <p className="text-Text1 text-lg px-6 h-[250px]">
              Ваш личный проводник в Эфиопию Откройте для себя Эфиопию с нашими
              опытными гидами, знающими самые интересные уголки
            </p>
          </div>
          <div className="bg-Color4">
            <h1 className="text-white text-xl p-6 font-semibold">
              Location Manager
            </h1>
            <p className="text-Text1 text-lg px-6 h-[250px]">
              Создаем идеальное путешествие Наши эксперты по местам гарантируют
              вам лучшие впечатления в каждом месте назначения
            </p>
          </div>
        </motion.div>

        {/* Desc Section */}

        <motion.div
          ref={myRef}
          className="w-full lg:w-[50%]"
          initial="hidden"
          animate={mainControls}
          variants={variants}
          transition={{ duration: 0.8, delay: 0.25 }}
        >
          <div>
            <p className="text-Orange lg:text-[30px] italic py-5">
              Welcome to Solast
            </p>
          </div>
          <div>
            <h1 className="text-[40px] font-semibold text-Black">
              Discover the Wonders of Ethiopia
            </h1>
            <p className="py-5 text-DarkGray text-lg">
              Эфиопия, земля древней истории и потрясающих пейзажей, ждет вашего
              исследования. От старинных церквей Аксума до яркой городской жизни
              Аддис-Абебы – здесь найдется что-то для каждого
            </p>
            <p className="py-5 text-DarkGray text-lg">
              Совершите путешествие на юг Эфиопии в Арба Минч ,походите по
              джунглям, покатайтесь на лианах, подплывите к крокодилам на
              расстоянии вытянутой руки b погрузитесь в богатое культурное
              наследие этой невероятной страны. Агентство Крылья Эфиопии здесь,
              чтобы сделать ваше приключение незабываемым.
            </p>
          </div>
          <div>
            <Link to="/destination">
              <button className="mt-5 px-6 py-4 border-0 bg-Orange text-white text-lg rounded-lg hover:shadow-lg duration-300 ease-in-out">
                Найти направление
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Description;

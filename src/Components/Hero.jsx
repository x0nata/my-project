import { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
// import { FaPlay } from "react-icons/fa";

const Hero = () => {
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
    <section className="container mx-auto p-5 mt-8 mb-22 sm:mt-16">
      <div className="flex flex-col-reverse lg:flex lg:flex-row justify-between lg:items-center">
        {/* Text Hero */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={{ duration: 0.8 }}
        >
          <div>
            <p className="text-Orange lg:text-[30px] italic py-5">
              Добро пожаловать в агентство путешествий“Крылья Эфиопии
            </p>
          </div>
          <div>
            <h1 className="text-white text-[30px] lg:text-[55px] font-extrabold lg:w-[65%] pb-4">
              Откройте для себя Эфиопию вместе с нами
            </h1>
            <p className="text-white text-[14px] lg:text-[20px] font-light">
              Прикоснитесь к сердцу Эфиопии и откройте для себя ее богатейшую
              историю и восхитительные пейзажи
            </p>
          </div>
        </motion.div>

        {/* Video Icon */}
        {/* <div>
          <button className="p-4 lg:p-8 rounded-full bg-white flex justify-center items-center">
            <FaPlay
              className="lg:w-[40px] lg:h-[40px] text-Orange
            "
            />
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default Hero;

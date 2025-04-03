/* eslint-disable no-unused-vars */
import React, { useEffect, useState, useCallback } from "react";
import Navbar from "../Components/Navbar";
import TourHero from "../Components/TourHero";
import Footer from "../Components/Footer";
import I25 from "../assets/I25.jpg";
import I24 from "../assets/I24.jpg";
import I6 from "../assets/I6.jpg";
import I8 from "../assets/I8.jpg";

const AddisIT = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const slides = [
    {
      id: 1,
      imageUrl: I8,
    },
    {
      id: 2,
      imageUrl: I6,
    },
    {
      id: 3,
      imageUrl: I24,
    },
    {
      id: 4,
      imageUrl: I25,
    },
  ];

  const goToNext = useCallback(() => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, slides.length]);

  useEffect(() => {
    let intervalId;

    if (!isHovered) {
      intervalId = setInterval(() => {
        goToNext();
      }, 3000); // Change slide every 3 seconds
    }

    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [currentIndex, isHovered, goToNext]);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const handleNext = () => {
    goToNext();
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <section className="sec2">
      <Navbar />
      <TourHero />
      <div className="container mx-auto rounded-xl shadow-md py-10">
        <h1 className="text-Black text-3xl font-semibold text-center pb-4">
          Маршрут по Аддис Абебе
        </h1>

        {/* Imgage Section */}

        <div
          className="relative w-full h-screen max-h-[800px] overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Slides */}
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {slides.map((slide) => (
              <div
                key={slide.id}
                className="relative w-full flex-shrink-0 h-screen max-h-[800px]"
              >
                <img
                  src={slide.imageUrl}
                  alt=""
                  className="w-full h-full object-cover"
                  draggable="false"
                />
              </div>
            ))}
          </div>

          {/* Navigation Arrows - Only show on hover */}
          {isHovered && (
            <>
              <button
                onClick={goToPrevious}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-30 text-white p-3 rounded-full hover:bg-opacity-50 transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-30 text-white p-3 rounded-full hover:bg-opacity-50 transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </>
          )}

          {/* Dots Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {slides.map((slide, slideIndex) => (
              <button
                key={slideIndex}
                onClick={() => goToSlide(slideIndex)}
                className={`h-2 w-2 rounded-full transition-all ${
                  currentIndex === slideIndex
                    ? "bg-white w-4"
                    : "bg-gray-500 bg-opacity-50"
                }`}
                aria-label={`Go to slide ${slideIndex + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Description Section */}
        <div className="sm:mt-8 p-5 space-y-4">
          <p className="sm:text-lg px-2 sm:px-5 font-light text-Black text-justify">
            <span className="text-Orange font-bold">День 1 -</span>Утренний
            прилет в Аддис Абебу. Заселение в гостиницу в центре города ,
            небольшой отдых. После обеда пешая прогулка по центру столицы ,
            знакомство с кухней Эфиопии.
          </p>
          <p className="sm:text-lg px-2 sm:px-5 font-light text-Black text-justify">
            <span className="text-Orange font-bold">День 2 -</span> Посещение
            Юнити парка где находятся 2 дворца и зоопарк. Обед в эфиопском
            ресторане с самостоятельным приготовлением инжеры , Кофейная
            церемония. Пешая прогулка до главной площади Мескаль , по дороге
            посещение церкви Святого Стефана . Посещение Музея Аддис Абебы,
            находящегося в историческом здании. Ужин в близлежащем ресторане
            Union с прекрасным видом на площадь Мескаль.
          </p>
          <p className="sm:text-lg px-2 sm:px-5 font-light text-Black text-justify">
            <span className="text-Orange font-bold">День 3 -</span> Знакомство с
            горой Ентото находящейся на высоте 3100 м. Посещение старого дворца
            Императора Менелика , музея ( здесь находится икона которую
            Император Российской Империи подарил Менелику на коронацию) , церкви
            Святой Марии, построенной императрицей Таиту и церкви Рагуила ,
            построенной императором Менеликом . Прогулка по эвкалиптовому парку.
          </p>
          <p className="sm:text-lg px-2 sm:px-5 font-light text-Black text-justify">
            <span className="text-Orange font-bold">День 4 -</span> Посещение
            Дворца Ганната Леуль – Рай для принца , этнографического музея.
            Посещения Собора Святой Троицы где похоронен последний эфиопский
            император и Михаил Бабичев
          </p>
          <p className="sm:text-lg px-2 sm:px-5 font-light text-Black text-justify">
            <span className="text-Orange font-bold">День 5 -</span>Посещение
            Собора Святого Георгия , где находятся колокол и иконы из России
            ,мастерской где пишут иконы и церковные книги , первого ж/д вокзала
            в Аддис Абебе , знакомство с игрой карамбола, ознакомление с 2мя
            памятниками львов , являющихся визитной карточкой города. После
            обеда – покупка сувениров и по желанию местных кожаных изделий .
            Вечерний вылет на Родину
          </p>
        </div>
        <div className="px-7 sm:px-10 py-5">
          <span className=" px-8 py-4 sm:text-xl">
            <span className="text-Orange font-bold">Цена - </span> 550 USD per
            person
          </span>
        </div>
      </div>

      <Footer />
    </section>
  );
};

export default AddisIT;

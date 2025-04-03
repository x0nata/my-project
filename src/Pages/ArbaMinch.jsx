/* eslint-disable no-unused-vars */
import React, { useEffect, useState, useCallback } from "react";
import Navbar from "../Components/Navbar";
import TourHero from "../Components/TourHero";
import Footer from "../Components/Footer";
import I18 from "../assets/I18.jpg";
import I17 from "../assets/I17.jpg";
import I16 from "../assets/I16.jpg";
import I15 from "../assets/I15.jpg";
import I14 from "../assets/I14.jpg";
import I13 from "../assets/I13.jpg";

const ArbaMinch = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const slides = [
    {
      id: 1,
      imageUrl: I13,
    },
    {
      id: 2,
      imageUrl: I14,
    },
    {
      id: 3,
      imageUrl: I15,
    },
    {
      id: 4,
      imageUrl: I16,
    },
    {
      id: 5,
      imageUrl: I17,
    },
    {
      id: 6,
      imageUrl: I18,
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
          Посетите город Арба Минч в Эфиопии
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
            Всего 50 минут на самолете Эфиопских Авиалиний – и Вы в джунглях на
            юге страны в городе Арба Минч ( Сорок Источников)
          </p>
          <p className="sm:text-lg px-2 sm:px-5 font-light text-Black text-justify">
            Увидите настоящие джунгли с их богатой флорой и фауной
          </p>
          <p className="sm:text-lg px-2 sm:px-5 font-light text-Black text-justify">
            Совершите лодочную прогулку по озеру Чамо для наблюдения за
            крокодилами и бегемотами
          </p>
          <p className="sm:text-lg px-2 sm:px-5 font-light text-Black text-justify">
            Посетите народ Дорзе известного своими уникальными навыками
            ткачества и традиционными домами в виде головы слона
          </p>
          <p className="sm:text-lg px-2 sm:px-5 font-light text-Black text-justify">
            Здесь культивируют морингу которую называют "чудо-деревом" из-за ее
            полезных свойств для здоровья
          </p>
        </div>
        <div className="px-7 sm:px-10 py-5">
          <span className=" px-8 py-4 sm:text-xl">
            <span className="text-Orange font-bold">Цена - </span> 750 USD per
            person
          </span>
          <p className="mt-10 sm:text-lg font-light text-Black">
            Отдельно оплачиваются билеты местных авиалиний примерно 190 USD если
            прилетели в страну Эфиопскими авиалиниями и 265 USD если другой
            авиакомпанией
          </p>
        </div>
      </div>

      <Footer />
    </section>
  );
};

export default ArbaMinch;

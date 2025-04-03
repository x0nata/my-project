/* eslint-disable no-unused-vars */
import React from "react";

const Tour = (prop) => {
  return (
    <section>
      <div className="flex flex-col">
        <div>
          <span className="bg-Orange text-white px-8 py-4 text-xl shadow rounded-md font-semibold">
            {prop.span}
          </span>
        </div>
        <div className="mt-10 h-48 shadow hover:shadow-lg duration-300 ease-in-out px-4 lg:px-8 py-8 rounded-xl">
          <span className="text-Orange font-semibold uppercase">
            {prop.days}
          </span>
          <h1 className="text-Black text-2xl font-medium py-2">{prop.place}</h1>
          <div className="text-lg flex flex-row lg:items-center text-DarkGray space-x-2 pb-3">
            {prop.icon1}
            <p>{prop.location}</p>
          </div>
          <div className="flex flex-row items-center space-x-4 lg:text-lg">
            <span className="text-Orange">{prop.icon2}</span>
            <span className="text-DarkGray">{prop.no1}</span>
            <span className="text-Orange">{prop.icon3}</span>
            <span className="text-DarkGray">{prop.no2}</span>
            <span className="text-Orange">{prop.icon4}</span>
            <span className="text-DarkGray">{prop.desc}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tour;

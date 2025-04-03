import React from "react";
import { FaSearch, FaCalendar, FaAngleDown } from "react-icons/fa";

const CTA2 = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center shadow-md">
      <div className="w-full lg:w-[25%] pb-6 flex flex-col bg-white border-b-[1px] sm:border-b-0 lg:border-r-[1px] border-DarkGray">
        <label className="uppercase p-4 text-lg font-semibold text-Orange">
          Destination
        </label>
        <div className="flex flex-row items-center pl-2 gap-2">
          <FaSearch className="text-DarkGray text-lg" />
          <input
            type="text"
            className="text-base lg:pr-2 py-2 outline-none"
            placeholder="Search Place"
          />
        </div>
      </div>

      {/* Second Form */}

      <div className="w-full lg:w-[25%] pb-6 lg:pr-2 flex flex-col bg-white border-b-[1px] sm:border-b-0 lg:border-r-[1px] border-DarkGray">
        <label className="uppercase p-4 text-lg font-semibold text-Orange">
          Check-In date
        </label>
        <div className="flex flex-row items-center pl-2 gap-2">
          <FaCalendar className="text-DarkGray text-lg" />
          <input
            type="Text"
            className="text-base lg:pr-2 py-2 outline-none"
            placeholder="Check In Date"
          />
        </div>
      </div>

      {/* Third Form */}

      <div className="w-full lg:w-[25%] pb-6 lg:pr-2 flex flex-col bg-white border-b-[1px] sm:border-b-0 lg:border-r-[1px] border-DarkGray">
        <label className="uppercase p-4 text-lg font-semibold text-Orange">
          Check-Out date
        </label>
        <div className="flex flex-row items-center pl-4 gap-4">
          <FaCalendar className="text-DarkGray text-lg" />
          <input
            type="Text"
            className="text-base lg:pr-2 py-2 outline-none"
            placeholder="Check Out Date"
          />
        </div>
      </div>

      {/* Fourth Form */}

      <div className="w-full lg:w-[25%] pb-6 lg:pr-2 flex flex-col bg-white">
        <label className="uppercase p-4 text-lg font-semibold text-Orange">
          Price Limit
        </label>
        <div className="flex flex-row items-center pl-2 gap-2">
          <FaAngleDown className="text-DarkGray text-lg" />
          <input
            type="Text"
            className="text-base lg:pr-2 py-2 outline-none"
            placeholder="$100"
          />
        </div>
      </div>

      {/* Submit Button */}

      <button className="bg-Orange text-white h-[90px] sm:h-[124px] w-full lg:w-[30%] sm:px-20 text-lg font-semibold">
        Search
      </button>
    </div>
  );
};

export default CTA2;

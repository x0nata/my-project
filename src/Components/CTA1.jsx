import React from "react";
import { FaSearch, FaCalendar } from "react-icons/fa";

const CTA1 = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center shadow-md">
      <div className="w-full pb-5 flex flex-col bg-white border-b-[1px] sm:border-b-0 lg:border-r-[1px] border-DarkGray">
        <label className="uppercase p-4 text-lg font-semibold text-Orange">
          Destination
        </label>
        <div className="flex flex-row items-center pl-4 gap-4">
          <FaSearch className="text-DarkGray text-lg" />
          <input
            type="text"
            className="text-lg lg:pr-4 py-2 outline-none"
            placeholder="Search Place"
          />
        </div>
      </div>

      {/* Second Form */}

      <div className="w-full pb-5 lg:pr-10 flex flex-col bg-white border-b-[1px] sm:border-b-0 lg:border-r-[1px] border-DarkGray">
        <label className="uppercase p-4 text-lg font-semibold text-Orange">
          Check-In date
        </label>
        <div className="flex flex-row items-center pl-4 gap-4">
          <FaCalendar className="text-DarkGray text-lg" />
          <input
            type="Text"
            className="text-lg lg:pr-4 py-2 outline-none"
            placeholder="Check In Date"
          />
        </div>
      </div>

      {/* Third Form */}

      <div className="w-full pb-5 lg:pr-10 flex flex-col bg-white">
        <label className="uppercase p-4 text-lg font-semibold text-Orange">
          Check-Out date
        </label>
        <div className="flex flex-row items-center pl-4 gap-4">
          <FaCalendar className="text-DarkGray text-lg" />
          <input
            type="Text"
            className="text-lg lg:pr-4 py-2 outline-none"
            placeholder="Check Out Date"
          />
        </div>
      </div>

      {/* Submit Button */}

      <button className="bg-Orange text-white h-[90px] sm:h-[124px] w-full sm:px-28 text-lg font-semibold">
        Search
      </button>
    </div>
  );
};

export default CTA1;

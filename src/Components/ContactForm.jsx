import React from "react";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaPaperPlane,
  FaInternetExplorer,
} from "react-icons/fa";

const ContactForm = () => {
  return (
    <section className="mx-auto container p-5 mt-10">
      <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/*First Grid  */}
          <div className="flex flex-col items-center justify-center bg-bg1 lg:w-[320px] sm:h-[340px] py-10 sm:py-0">
            <div className="bg-Orange text-white text-4xl w-[100px] h-[100px] flex justify-center items-center rounded-full">
              <FaMapMarkerAlt />
            </div>
            <span className="text-Orange text-2xl font-bold py-5">Address</span>
            <span className="text-DarkGray text-lg font-medium pb-3">
              Addis Ababa, Ethiopia
            </span>
          </div>

          {/* Second Grid */}
          <div className="flex flex-col items-center justify-center bg-bg1 w-[280px] sm:w-[320px] sm:h-[340px] py-10 sm:py-0">
            <div className="bg-Orange text-white text-4xl w-[100px] h-[100px] flex justify-center items-center rounded-full">
              <FaPhone />
            </div>
            <span className="text-Orange text-2xl font-bold py-5">
              Contact Number
            </span>
            <span className="text-DarkGray text-lg font-medium pb-3">
              +251994717954
            </span>
          </div>

          {/* Third Grid */}
          <div className="flex flex-col items-center justify-center bg-bg1 w-[280px] sm:w-[320px] sm:h-[340px] py-10 sm:py-0">
            <div className="bg-Orange text-white text-4xl w-[100px] h-[100px] flex justify-center items-center rounded-full">
              <FaPaperPlane />
            </div>
            <span className="text-Orange text-2xl font-bold py-5">
              Email Address
            </span>
            <span className="text-DarkGray text-lg font-medium pb-3">
              info@solasttravel.com
            </span>
          </div>

          {/* Fourth Grid */}
          <div className="flex flex-col items-center justify-center bg-bg1 w-[280px] sm:w-[320px] sm:h-[340px] py-10 sm:py-0">
            <div className="bg-Orange text-white text-4xl w-[100px] h-[100px] flex justify-center items-center rounded-full">
              <FaInternetExplorer />
            </div>
            <span className="text-Orange text-2xl font-bold py-5">Website</span>
            <span className="text-DarkGray text-lg font-medium pb-3">
            wingsofethiopia.com
            </span>
          </div>
        </div>

        {/* Form Section */}
        <div className="flex flex-col bg-bg1 lg:w-[550px] h-auto p-8 mt-10 lg:mt-0">
          <form action="#" className="space-y-5">
            <input
              type="text"
              placeholder="Your Name"
              className="block outline-none text-DarkGray bg-white p-3 sm:p-6 w-full text-xl border-2 border-gray-300 rounded-lg"
            />
            <input
              type="Email"
              placeholder="Your Email"
              className="block outline-none text-DarkGray bg-white p-3 sm:p-6 w-full text-xl border-2 border-gray-300 rounded-lg"
            />
            <input
              type="Text"
              placeholder="Subject"
              className="block outline-none text-DarkGray bg-white p-3 sm:p-6 w-full text-xl border-2 border-gray-300 rounded-lg"
            />
            <textarea
              cols="30"
              rows="7"
              placeholder="Message"
              className="block outline-none text-DarkGray bg-white p-3 sm:p-6 w-full text-xl border-2 border-gray-300 rounded-lg"
            ></textarea>
            <input
              type="submit"
              value="Send Message"
              className="bg-Orange text-white text-xl rounded-lg shadow-lg px-8 py-5 outline-none"
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;

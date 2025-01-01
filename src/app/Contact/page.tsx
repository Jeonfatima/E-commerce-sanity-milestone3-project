import React from 'react';
import { CiPhone } from "react-icons/ci";
import { CiMail } from "react-icons/ci";

const Contact = () => {
  return (
    <div className="flex justify-center items-center min-h-screen container">
      <div className="w-full lg:max-w-[1140px] rounded-md p-4">
        <div className="flex flex-col lg:flex-row gap-10 max-w-[1170px]">
          {/* Left Section */}
          <div className="space-y-6 shadow-lg font-bold w-full lg:w-[360px] lg:h-[457px]">
            {/* Call To Us */}
            <div className="flex items-center space-x-4 p-3">
              <div className="m-3 flex flex-col">
                <div className="flex items-center space-x-2">
                  <CiPhone className="bg-blue-400 text-sm text-white h-[40px] w-[40px] rounded-full" />
                  <h3 className="text-lg font-bold text-gray-800 text-left">Call To Us</h3>
                </div>
                <p className="text-sm text-gray-600 text-left mt-3 mb-2">
                  We are available 24/7, 7 days a week.
                </p>
                <p className="text-sm text-gray-800 font-medium text-left">Phone: +880611122222</p>
              </div>
            </div>

            {/* Write To Us */}
            <div className="flex items-center space-x-4 p-3">
              <div className="m-3 flex flex-col">
                <div className="flex items-center space-x-2">
                  <CiMail className="bg-blue-400 text-sm text-white h-[40px] w-[40px] rounded-full" />
                  <h3 className="text-lg font-bold text-gray-800 text-left">Write To Us</h3>
                </div>
                <p className="text-gray-600 text-left">
                  Fill out our form and we will contact you within 24 hours.
                </p>
                <p className="text-gray-800 font-medium text-left mt-3 mb-2">Emails: customer@exclusive.com</p>
                <p className="text-gray-800 font-medium text-left">Emails: support@exclusive.com</p>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full lg:w-[800px] lg:h-[457px]">
            <form className="space-y-6 shadow-lg p-6 h-full">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <input
                  type="text"
                  placeholder="Your Name *"
                  className="h-[50px] w-full md:w-auto p-2 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="email"
                  placeholder="Your Email *"
                  className="h-[50px] w-full md:w-auto p-2 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="text"
                  placeholder="Your Phone *"
                  className="h-[50px] w-full md:w-auto p-2 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <textarea
                placeholder="Your Message"
                className="w-full h-[220px] p-3 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="w-[215px] h-[56px] bg-blue-400 text-white font-semibold rounded-md hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
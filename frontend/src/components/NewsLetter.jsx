import React from "react";

const Newsletter = () => {
  return (
    <section className="bg-[#0F62FE] text-white py-8 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Navigation Links */}
        <ul className="flex flex-wrap justify-center gap-8 text-base font-semibold font-inter">
          <li className="cursor-pointer hover:underline">Home</li>
          <li className="cursor-pointer hover:underline">Our Projects</li>
          <li className="cursor-pointer hover:underline">Happy Clients</li>
          <li className="cursor-pointer hover:underline">About Us</li>
          <li className="cursor-pointer hover:underline">Contact Form</li>
        </ul>

        {/* Subscribe Section */}
        <div className="flex flex-wrap items-center gap-4 md:gap-6">
          <span className="font-semibold text-base font-inter">
            Subscribe Us
          </span>
          <div className="flex border border-white rounded overflow-hidden focus-within:ring-2 focus-within:ring-yellow-300 font-poppins">
            <input
              type="email"
              placeholder="Enter Email Address"
              className="px-4 py-2 text-base text-black outline-none w-52 md:w-64 focus:ring-0 focus:border-yellow-400"
            />
            <button className="bg-white text-[#0F62FE] px-5 py-2 text-base font-semibold hover:bg-gray-200 transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;

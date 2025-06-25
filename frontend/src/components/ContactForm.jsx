import React from "react";

const ContactForm = () => {
  return (
    <div className="backdrop-blur-sm bg-[#1E3A8A]/70 border border-white/20 rounded-xl p-8 w-full max-w-md shadow-lg min-h-[460px] flex flex-col justify-center">
      <h2 className="text-white text-2xl sm:text-3xl font-bold mb-6 text-center leading-tight font-poppins">
        Get a Free <br />
        <span className="text-white text-3xl sm:text-3xl font-bold">
          Consultation
        </span>
      </h2>
      <form className="space-y-5">
        <input
          type="text"
          placeholder="Full Name"
          className="w-full px-4 py-2 rounded-md bg-white/10 text-white placeholder-white outline-none border border-white/20 focus:ring-2 focus:ring-blue-300 font-inter"
        />
        <input
          type="email"
          placeholder="Enter Email Address"
          className="w-full px-4 py-2 rounded-md bg-white/10 text-white placeholder-white outline-none border border-white/20 focus:ring-2 focus:ring-blue-300 font-inter"
        />
        <input
          type="tel"
          placeholder="Mobile Number"
          className="w-full px-4 py-2 rounded-md bg-white/10 text-white placeholder-white outline-none border border-white/20 focus:ring-2 focus:ring-blue-300 font-inter"
        />
        <input
          type="text"
          placeholder="Area, City"
          className="w-full px-4 py-2 rounded-md bg-white/10 text-white placeholder-white outline-none border border-white/20 focus:ring-2 focus:ring-blue-300 font-inter"
        />
        <button
          type="submit"
          className="w-full py-2 mt-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-md transition font-poppins"
        >
          Get Quick Quote
        </button>
      </form>
    </div>
  );
};

export default ContactForm;

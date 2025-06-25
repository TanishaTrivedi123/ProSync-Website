import React from "react";

const BottomHeroSection = () => {
  return (
    <section className="w-full px-6 py-28 bg-white relative overflow-hidden">
      <div className="max-w-[1300px] mx-auto flex flex-col md:flex-row items-center justify-between gap-24 relative z-10">
        {/* Left Text */}
        <div className="md:w-[55%] text-center md:text-left space-y-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1E3A8A] leading-tight font-poppins">
            Not Your Average Realtor
          </h2>
          <p className="text-gray-600 text-base sm:text-lg md:text-xl max-w-lg mx-auto md:mx-0 font-inter">
            Real results-driven for selling property. Focused on marketing,
            design, and client strategy to get homes sold quickly and for top
            value.
          </p>
        </div>

        {/* Right Image Triangle Layout */}
        <div className="md:w-[45%] relative flex items-center justify-center min-h-[480px] sm:min-h-[520px]">
          {/* Center Large Image */}
          <img
            src="/image3.svg"
            alt="Main"
            className="w-80 h-80 sm:w-[340px] sm:h-[340px] md:w-[380px] md:h-[380px] rounded-full object-cover border-4 border-white shadow-2xl relative z-20"
          />

          {/* Top Right Small Image */}
          <img
            src="/image2.svg"
            alt="Top Right"
            className="w-32 h-32 sm:w-36 sm:h-36 rounded-full object-cover border-4 border-white shadow-xl absolute -top-12 right-4 z-10"
          />

          {/* Bottom Left Small Image */}
          <img
            src="/image1.svg"
            alt="Bottom Left"
            className="w-32 h-32 sm:w-36 sm:h-36 rounded-full object-cover border-4 border-white shadow-xl absolute -bottom-10 -left-6 z-10"
          />
        </div>
      </div>

      {/* Decorative Background Elements */}
      <img
        src="/Ellipse 24.svg"
        alt="Small Dot Top Left"
        className="absolute top-8 left-6 w-5 h-5"
      />
      <img
        src="/Ellipse 25.svg"
        alt="Small Dot Bottom Center"
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 w-4 h-4"
      />
      <img
        src="/Ellipse 10.svg"
        alt="Large Faint Circle"
        className="absolute top-0 right-0 w-80 h-80 opacity-10"
      />
      <img
        src="/Ellipse 25.svg"
        alt="Small Dot Bottom Center"
        className="absolute bottom-[76%] left-1/2 transform -translate-x-1/2 w-4 h-4"
      />
      <img
        src="/Ellipse 25.svg"
        alt="Small Dot Bottom Center"
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 w-4 h-4"
      />

      {/* Existing */}
      <img
        src="/Ellipse 24.svg"
        alt="Big Ball Left"
        className="absolute -top-12 -left-24 w-60 h-60 opacity-20"
      />
      <img
        src="/Ellipse 24.svg"
        alt="Decor Right"
        className="absolute bottom-[-70px] right-[-50px] w-52 h-52 opacity-20"
      />

      <img
        src="/Ellipse 24.svg"
        alt="Mid Left Blur"
        className="absolute top-[50%] left-0 transform -translate-y-1/2 -translate-x-1/2 w-40 h-40 opacity-10"
      />

      <img
        src="/Ellipse 26.svg"
        alt="Top Center"
        className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-24 h-24 opacity-10"
      />

      <img
        src="/Ellipse 24.svg"
        alt="Behind Text Blur"
        className="absolute top-[30%] left-[15%] w-40 h-40 opacity-10 z-0"
      />

      <img
        src="/Ellipse 24.svg"
        alt="Behind Text Blur"
        className="absolute top-[80%] left-[1%] w-40 h-40 opacity-10 z-0"
      />

      <img
        src="/Ellipse 24.svg"
        alt="Behind Text Blur"
        className="absolute top-[50%] left-[50%] w-40 h-40 opacity-10 z-0"
      />
    </section>
  );
};

export default BottomHeroSection;

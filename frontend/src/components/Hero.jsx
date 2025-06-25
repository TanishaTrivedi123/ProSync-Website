import React from "react";
import ContactForm from "./ContactForm"; // adjust path if needed

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative pt-[72px] sm:pt-[80px] md:pt-20 lg:pt-24"
    >
      {/* Full Width Background Image */}
      <div className="relative w-full">
        <img
          src="/heroImage.svg"
          alt="Hero Section"
          className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover object-top"
        />

        {/* Overlay Content for text only */}
        <div className="absolute inset-0 bg-black/30 flex flex-col md:flex-row items-center justify-center px-6 md:px-20 gap-10">
          {/* Left Text */}
          <div className="text-center md:text-left md:w-1/2 mt-10 md:mt-0">
            <h1 className="text-white text-2xl sm:text-3xl md:text-5xl font-bold leading-snug font-poppins">
              Consultation, Design, Marketing
            </h1>
          </div>

          {/* Right: Show form only on md and above */}
          <div className="hidden md:block md:w-1/2">
            <ContactForm />
          </div>
        </div>
      </div>

      {/* Below the image: show form only on mobile */}
      <div className="block md:hidden px-4 py-6 flex justify-center items-center">
        <div className="w-full max-w-sm">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Hero;

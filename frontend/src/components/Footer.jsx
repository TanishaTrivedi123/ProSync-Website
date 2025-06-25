import React from "react";
import { FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left Section */}
        <div className="md:w-1/3 text-center md:text-left">
          <p className="text-sm sm:text-base font-inter">
            © {new Date().getFullYear()} ProSync. All rights reserved.
            <br className="hidden sm:inline" />
            Designed & built by Tanisha.
          </p>
        </div>

        {/* Center Section (Logo) */}
        <div className="md:w-1/3 flex justify-center">
          <img
            src="/logo.svg"
            alt="ProSync Logo"
            className="w-32 sm:w-40 object-contain"
          />
        </div>

        {/* Right Section (Social Icons) */}
        <div className="md:w-1/3 flex justify-center md:justify-end gap-6 text-white text-xl">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <FaTwitter className="hover:text-[#1DA1F2] transition" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn className="hover:text-[#0077B5] transition" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram className="hover:text-[#E4405F] transition" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

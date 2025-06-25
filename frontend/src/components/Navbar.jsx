import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Our Projects", to: "projects" },
    { name: "Happy Clients", to: "clients" },
    { name: "About Us", to: "clients" },
    { name: "Newsletter Subscription", to: "newsletter" },
    { name: "Contact Form", to: "contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-sm py-4 shadow-md"
          : "bg-white py-5 lg:py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="w-36 md:w-48 cursor-pointer"
          >
            <HashLink smooth to="/#home">
              <img
                src="/logo.svg"
                alt="ProSync Logo"
                className="w-full h-auto object-contain"
              />
            </HashLink>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-10">
            {navItems.map((item, index) => (
              <motion.div
                key={item.to}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <HashLink
                  smooth
                  to={`/#${item.to}`}
                  className="text-[#1E3A8A] font-semibold text-base lg:text-lg cursor-pointer hover:text-[#3B82F6] transition-all relative group font-inter"
                >
                  {item.name}
                  <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-[#3B82F6] transition-all duration-300 group-hover:w-full"></span>
                </HashLink>
              </motion.div>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-[#1E3A8A] focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <FiX size={26} /> : <FiMenu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white absolute top-full left-0 w-full z-40 shadow"
          >
            <div className="px-6 py-5 space-y-4">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.to}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <HashLink
                    smooth
                    to={`/#${item.to}`}
                    onClick={() => setIsOpen(false)}
                    className="block text-[#1E3A8A] text-lg py-2 border-b border-gray-200 hover:text-[#3B82F6] transition font-semibold font-inter"
                  >
                    {item.name}
                  </HashLink>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

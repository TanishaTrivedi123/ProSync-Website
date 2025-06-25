import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { API_URL } from "../utils/api"; // make sure this points to your backend

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobilenum: "",
    city: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, mobilenum, city } = formData;

    if (!name || !email || !mobilenum || !city) {
      toast.warn("Please fill in all fields");
      return;
    }

    try {
      const res = await axios.post(`${API_URL}/contact`, formData);
      if (res.data.success) {
        toast.success("Thank you! We'll get back to you soon.");
        setFormData({ name: "", email: "", mobilenum: "", city: "" });
      }
    } catch (err) {
      console.error("Form submission failed:", err);
      toast.error("Something went wrong!");
    }
  };

  return (
    <div className="backdrop-blur-sm bg-[#1E3A8A]/70 border border-white/20 rounded-xl p-8 w-full max-w-md shadow-lg min-h-[460px] flex flex-col justify-center">
      <h2 className="text-white text-2xl sm:text-3xl font-bold mb-6 text-center leading-tight font-poppins">
        Get a Free <br />
        <span className="text-white text-3xl sm:text-3xl font-bold">
          Consultation
        </span>
      </h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        <input
          type="text"
          name="name"
          value={formData.name}
          placeholder="Full Name"
          onChange={handleChange}
          className="w-full px-4 py-2 rounded-md bg-white/10 text-white placeholder-white outline-none border border-white/20 focus:ring-2 focus:ring-blue-300 font-inter"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          placeholder="Enter Email Address"
          onChange={handleChange}
          className="w-full px-4 py-2 rounded-md bg-white/10 text-white placeholder-white outline-none border border-white/20 focus:ring-2 focus:ring-blue-300 font-inter"
        />
        <input
          type="tel"
          name="mobilenum"
          value={formData.mobilenum}
          placeholder="Mobile Number"
          onChange={handleChange}
          className="w-full px-4 py-2 rounded-md bg-white/10 text-white placeholder-white outline-none border border-white/20 focus:ring-2 focus:ring-blue-300 font-inter"
        />
        <input
          type="text"
          name="city"
          value={formData.city}
          placeholder="Area, City"
          onChange={handleChange}
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

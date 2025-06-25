import React, { useEffect } from "react";
import { FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const EnterPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const admin = localStorage.getItem("isAdmin");
    const expireTime = localStorage.getItem("expireTime");
    const currentTime = new Date().getTime();

    if (admin !== "true" || !expireTime || currentTime > parseInt(expireTime)) {
      localStorage.removeItem("isAdmin");
      localStorage.removeItem("expireTime");
      navigate("/admin"); // 🔐 Redirect to login if expired
    }
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1E3A8A] via-[#0f0f0f] to-[#3B82F6] flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md bg-[#0f172a] rounded-xl shadow-2xl p-8 border border-blue-500/40 text-center">
        <h1 className="text-3xl font-bold text-orange-500 mb-8 tracking-wider uppercase font-poppins">
          Admin Panel
        </h1>

        <div className="space-y-4">
          <button
            onClick={() => navigate("/add-projects")}
            className="w-full flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-lg transition duration-300 shadow-md hover:shadow-lg font-outfit font-inter"
          >
            <FaPlus />
            Add Projects
          </button>

          <button
            onClick={() => navigate("/add-clients")}
            className="w-full flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-lg transition duration-300 shadow-md hover:shadow-lg font-outfit font-inter"
          >
            <FaPlus />
            Add Client Info
          </button>

          <button
            onClick={() => navigate("/view-contact-data")}
            className="w-full flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-lg transition duration-300 shadow-md hover:shadow-lg font-outfit font-inter"
          >
            <FaPlus />
            View Contact Form Responses
          </button>
        </div>
      </div>
    </div>
  );
};

export default EnterPage;

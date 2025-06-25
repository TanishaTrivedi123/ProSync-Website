import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { FaImage } from "react-icons/fa";
import { API_URL } from "../utils/api";
import { useNavigate } from "react-router-dom";

const AddClients = () => {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [clientName, setClientName] = useState("");
  const [clientDesc, setClientDesc] = useState("");
  const [clientDesignation, setClientDesignation] = useState(""); // ✅ added
  const fileInputRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const admin = localStorage.getItem("isAdmin");
    const expireTime = localStorage.getItem("expireTime");
    const currentTime = new Date().getTime();

    if (admin !== "true" || !expireTime || currentTime > parseInt(expireTime)) {
      localStorage.removeItem("isAdmin");
      localStorage.removeItem("expireTime");
      navigate("/admin");
    }
  }, [navigate]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setPreview(file ? URL.createObjectURL(file) : null);
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!image || !clientName || !clientDesc || !clientDesignation) {
      toast.warn("Please fill all fields and select an image");
      return;
    }

    const formData = new FormData();
    formData.append("image", image);
    formData.append("name", clientName);
    formData.append("description", clientDesc);
    formData.append("designation", clientDesignation); // ✅ fixed

    try {
      const res = await axios.post(`${API_URL}/addclient`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      toast.success("Client uploaded successfully!");
      setClientName("");
      setClientDesc("");
      setClientDesignation("");
      setPreview(null);
      setImage(null);
    } catch (error) {
      console.error("Upload failed:", error);
      toast.error("Upload failed!");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1E3A8A] via-[#0f0f0f] to-[#3B82F6] flex items-center justify-center px-4">
      <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-lg w-full max-w-md border border-white/20 text-white">
        <h2 className="text-2xl font-semibold text-center mb-6 font-poppins">
          Upload Client Info
        </h2>

        <div className="flex justify-center mb-6">
          <div
            className="cursor-pointer w-32 h-32 rounded-full overflow-hidden border-4 border-white flex items-center justify-center bg-white/10 hover:scale-105 transition-transform duration-300 font-inter"
            onClick={() => fileInputRef.current.click()}
          >
            {preview ? (
              <img
                src={preview}
                alt="Client preview"
                className="object-cover w-full h-full"
              />
            ) : (
              <FaImage className="text-4xl text-white/60" />
            )}
          </div>
        </div>

        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          ref={fileInputRef}
          className="hidden"
        />

        <form onSubmit={handleUpload} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Client Name"
            value={clientName}
            onChange={(e) => setClientName(e.target.value)}
            className="bg-white/10 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-white placeholder:text-white/50"
            required
          />

          <textarea
            placeholder="Client Description"
            value={clientDesc}
            onChange={(e) => setClientDesc(e.target.value)}
            rows={3}
            className="bg-white/10 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-white placeholder:text-white/50 resize-none"
            required
          ></textarea>

          <input
            type="text"
            placeholder="Client Designation"
            value={clientDesignation}
            onChange={(e) => setClientDesignation(e.target.value)}
            className="bg-white/10 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-white placeholder:text-white/50"
            required
          />

          <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 rounded-md transition duration-300 shadow-md hover:shadow-lg"
          >
            Add Client
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddClients;

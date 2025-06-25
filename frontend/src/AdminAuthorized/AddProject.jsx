import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { FaImage } from "react-icons/fa";
import { API_URL } from "../utils/api";
import { useNavigate } from "react-router-dom";

const AddProject = () => {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [projectName, setProjectName] = useState("");
  const [projectDesc, setProjectDesc] = useState("");
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

    if (!image || !projectName || !projectDesc) {
      toast.warn("Please fill all fields and select an image");
      return;
    }

    const formData = new FormData();
    formData.append("image", image);
    formData.append("name", projectName);
    formData.append("description", projectDesc);

    // Debug
    for (let [key, value] of formData.entries()) {
      console.log(`${key}:`, value);
    }

    try {
      const res = await axios.post(`${API_URL}/addproject`, formData);

      toast.success("Project uploaded successfully!");
      setProjectName("");
      setProjectDesc("");
      setPreview(null);
      setImage(null);
    } catch (error) {
      console.error(
        "🔥 Upload failed:",
        error.response?.data || error.message || error
      );
      toast.error("Upload failed!");
    }
  };

  // const handleUpload = async (e) => {
  //   e.preventDefault();
  //   if (!image || !projectName || !projectDesc) {
  //     toast.warn("Please fill all fields and select an image");
  //     return;
  //   }

  //   const formData = new FormData();
  //   formData.append("image", image);
  //   formData.append("name", projectName);
  //   formData.append("description", projectDesc);

  //   try {
  //     const res = await axios.post(`${API_URL}/addproject`, formData, {
  //       headers: { "Content-Type": "multipart/form-data" },
  //     });

  //     toast.success("Project uploaded successfully!");
  //     setProjectName("");
  //     setProjectDesc("");
  //     setPreview(null);
  //     setImage(null);
  //   } catch (error) {
  //     console.error("Upload failed:", error);
  //     toast.error("Upload failed!");
  //   }
  // };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1E3A8A] via-[#0f0f0f] to-[#3B82F6] flex items-center justify-center px-4">
      <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-lg w-full max-w-md border border-white/20 text-white">
        <h2 className="text-2xl font-semibold text-center mb-6 font-poppins">
          Upload Project
        </h2>

        <div className="flex justify-center mb-6">
          <div
            className="cursor-pointer w-32 h-32 rounded-full overflow-hidden border-4 border-white flex items-center justify-center bg-white/10 hover:scale-105 transition-transform duration-300 font-inter"
            onClick={() => fileInputRef.current.click()}
          >
            {preview ? (
              <img
                src={preview}
                alt="Project preview"
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
          {/* Project Name */}
          <input
            type="text"
            placeholder="Project Name"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            className="bg-white/10 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-white placeholder:text-white/50"
            required
          />

          {/* Project Description */}
          <textarea
            placeholder="Project Description"
            value={projectDesc}
            onChange={(e) => setProjectDesc(e.target.value)}
            rows={3}
            className="bg-white/10 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-white placeholder:text-white/50 resize-none"
            required
          ></textarea>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 rounded-md transition duration-300 shadow-md hover:shadow-lg"
          >
            Add Project
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProject;

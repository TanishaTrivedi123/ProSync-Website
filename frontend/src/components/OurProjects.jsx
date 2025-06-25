import React, { useEffect, useState } from "react";
import { API_URL } from "../utils/api";
import axios from "axios";

const OurProjects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await axios.get(`${API_URL}/getprojects`);
        setProjects(res.data.projects || []);
      } catch (err) {
        console.error("Failed to fetch projects:", err);
      }
    };
    fetchProjects();
  }, []);

  return (
    <section className="w-full px-6 py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto space-y-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#1E3A8A] font-poppins">
          Our Projects
        </h2>
        <p className="text-base sm:text-lg text-gray-700 max-w-2xl mx-auto font-inter">
          Explore a showcase of our finest work — from powerful web dashboards
          and branding campaigns to seamless UI experiences. Each project
          reflects our passion for design, performance, and innovation.
        </p>

        {/* Dynamic Card Section */}
        <div className="flex overflow-x-auto gap-6 pb-4 no-scrollbar ">
          {projects.length === 0 ? (
            <div className="w-full h-[200px] flex items-center justify-center">
              <p className="text-gray-600 text-lg font-medium">
                No projects found.
              </p>
            </div>
          ) : (
            projects.map((project) => (
              <div
                key={project._id}
                className="min-w-[250px] max-w-[250px] h-[360px] bg-white rounded-xl shadow-md p-4 flex-shrink-0 flex flex-col justify-between font-inter"
              >
                <img
                  src={project.image?.url}
                  alt={project.name}
                  className="w-full h-40 object-cover rounded-md mb-3"
                />
                <div className="flex-1">
                  <h3 className="text-base font-semibold text-[#1E3A8A] mb-2 break-words">
                    {project.name}
                  </h3>
                  <p className="text-sm text-gray-600 break-words line-clamp-4">
                    {project.description}
                  </p>
                </div>
                <button className="mt-4 bg-orange-500 text-white text-sm px-4 py-2 rounded hover:bg-orange-600 transition">
                  Read More
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default OurProjects;

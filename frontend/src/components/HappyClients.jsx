import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../utils/api";

const HappyClients = () => {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const res = await axios.get(`${API_URL}/getclients`);
        if (res.data.success) {
          setClients(res.data.clients);
        } else {
          setError("Failed to fetch clients");
        }
      } catch (err) {
        console.error("Error fetching clients:", err);
        setError("Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchClients();
  }, []);

  return (
    <section className="w-full px-6 py-20 relative z-10">
      <div className="max-w-7xl mx-auto space-y-10 text-center">
        {/* Heading and Description */}
        <h2 className="text-3xl sm:text-4xl font-bold text-[#1E3A8A] font-poppins">
          Happy Clients
        </h2>
        <p className="text-base sm:text-lg text-gray-700 max-w-2xl mx-auto font-inter">
          Hear what our clients have to say about their experience with us.
          Client satisfaction is our biggest achievement.
        </p>

        {/* Loading/Error */}
        {loading && <p className="text-gray-600">Loading clients...</p>}
        {error && <p className="text-red-500">{error}</p>}

        {/* Scrollable Cards */}
        <div className="flex overflow-x-auto gap-6 pb-4 px-1 no-scrollbar">
          {clients.map((client) => (
            <div
              key={client._id}
              className="min-w-[220px] max-w-[220px] h-[300px] bg-white/90 backdrop-blur-md rounded-xl shadow-md p-4 flex-shrink-0 flex flex-col items-center justify-between text-center font-inter"
            >
              {/* Image */}
              <img
                src={client.image?.url}
                alt={client.name}
                className="w-16 h-16 object-cover rounded-full border-4 border-white shadow-md mb-2"
              />
              {/* Feedback */}
              <p className="text-sm text-gray-700 mb-2 line-clamp-4">
                {client.description}
              </p>
              {/* Name & Designation aligned left */}
              <div className="w-full text-left">
                <h3 className="text-base font-semibold text-[#1E3A8A]">
                  {client.designation}
                </h3>
                <p className="text-sm text-gray-500">{client.designation}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HappyClients;

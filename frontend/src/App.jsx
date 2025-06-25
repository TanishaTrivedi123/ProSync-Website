import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import BottomHeroSection from "./components/BottomHeroSection";
import OurProjects from "./components/OurProjects";
import HappyClients from "./components/HappyClients";
import NewsLetter from "./components/NewsLetter";
import ProtectedRoute from "./ProtectedRoute";
import Admin from "./Admin/Admin";
import EnterPage from "./AdminAuthorized/EnterPage";
import { ToastContainer } from "react-toastify";
import AddProject from "./AdminAuthorized/AddProject";
import AddClients from "./AdminAuthorized/AddClients";
import ContactData from "./AdminAuthorized/ContactData";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <div id="home">
                <Hero />
                <BottomHeroSection />
              </div>

              <div id="projects">
                <OurProjects />
              </div>

              <div id="clients">
                <HappyClients />
              </div>

              <div id="newsletter">
                <NewsLetter />
              </div>
            </>
          }
        />

        <Route path="/admin" element={<ProtectedRoute element={<Admin />} />} />
        <Route
          path="/EnterPage"
          element={<ProtectedRoute element={<EnterPage />} />}
        />
        <Route
          path="/add-projects"
          element={<ProtectedRoute element={<AddProject />} />}
        />
        <Route
          path="/add-clients"
          element={<ProtectedRoute element={<AddClients />} />}
        />
        <Route
          path="/view-contact-data"
          element={<ProtectedRoute element={<ContactData />} />}
        />
      </Routes>
      <Footer />

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        pauseOnHover
        theme="dark"
      />
    </>
  );
};

export default App;

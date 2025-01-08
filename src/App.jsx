/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import React, { createContext, useState, useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer";
import AboutUs from "./components/pages/AboutUs";
import HomePage from "./components/pages/HomePage";
import ProductsServices from "./components/pages/ProductsServices";
import VirtualLaboratory from "./components/pages/VirtualLaboratory";
import CollaborationCenter from "./components/pages/CollaborationCenter";
import Innovations from "./components/pages/Innovations";
import Sustainability from "./components/pages/Sustainability";
import Careers from "./components/pages/Careers";
import ContactUs from "./components/pages/ContactUs";
import FormPage from "./components/pages/FormPage";


// Theme Context
export const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

const AquaGeneticsAILab = () => (
  <div>
    <a
      href="https://phoenixlabs-agal.onrender.com/aitools"
      target="_blank"
      rel="noopener noreferrer"
    >
      Visit AquaGenetics AI Lab
    </a>
  </div>
);

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
    document.documentElement.classList.toggle("dark", !isDarkMode);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      <Router>
        <Navbar />
        <div className={`container mx-auto p-4 ${isDarkMode ? "dark" : ""}`}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/products-services" element={<ProductsServices />} />
            <Route path="/virtual-laboratory" element={<VirtualLaboratory />} />
            <Route path="/collaboration-center" element={<CollaborationCenter />} />
            <Route path="/innovations" element={<Innovations />} />
            <Route path="/sustainability" element={<Sustainability />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/aqua-genetics-ai-lab" element={<AquaGeneticsAILab />} />
            <Route path="/apply" element={<FormPage />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </ThemeContext.Provider>
  );
};

export default App;

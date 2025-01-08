/* eslint-disable no-unused-vars */
import React from "react";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-800 text-gray-800 dark:text-white transition-all duration-300">
      <div className="py-10 px-4">
        <h1 className="text-center text-4xl font-bold mb-10">About Us</h1>

        {/* Our Mission Section */}
        <div className="flex flex-col md:flex-row mb-10 bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden transition-transform hover:-translate-y-2">
          <div className="w-full md:w-1/3">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgNL4FjG2CswM33bJVRPPe7AOgdiE864eNUg&s"
              alt="Mission"
              className="w-full h-48 object-cover"
            />
          </div>
          <div className="p-6 md:w-2/3">
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-base leading-7">
            At Manic Organix, Inc., we are committed to leveraging agri-tech and biotechnology to provide fresh, nutritious produce while advancing research into groundbreaking agri-medicines.
            </p>
          </div>
        </div>

        {/* Our Story Section */}
        <div className="flex flex-col md:flex-row mb-10 bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden transition-transform hover:-translate-y-2">
          <div className="w-full md:w-1/3">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzzas7RwC6uCaWFMalXu9dN7xBkdG0y38DKQ&s"
              alt="Our Story"
              className="w-full h-48 object-cover"
            />
          </div>
          <div className="p-6 md:w-2/3">
            <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
            <p className="text-base leading-7">
            Founded with a passion for sustainability and innovation, Manic Organix, Inc. has grown from a humble farm to a world-class AI-powered agri-tech company. We pride ourselves on integrating modern agricultural practices with advanced technology to push the boundaries of health innovation.
            </p>
          </div>
        </div>

        {/* Leadership Team Section */}
        <div className="flex flex-col md:flex-row mb-10 bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden transition-transform hover:-translate-y-2">
          <div className="w-full md:w-1/3">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrRoMattIo3jW0EEYc8DfjAp4l1jK7JB6TZQ&s"
              alt="Leadership"
              className="w-full h-48 object-cover"
            />
          </div>
          <div className="p-6 md:w-2/3">
            <h2 className="text-2xl font-semibold mb-4">Leadership Team</h2>
            <p className="text-base leading-7">
            Profiles of visionary leaders with expertise in agriculture, biotechnology, and AI.
            </p>
          </div>
        </div>

        {/* Sustainability Goals Section */}
        <div className="flex flex-col md:flex-row mb-10 bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden transition-transform hover:-translate-y-2">
          <div className="w-full md:w-1/3">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStURq-MisZlUWUNPFXfVJ66bOR4NT6pmEkhA&s"
              alt="Sustainability"
              className="w-full h-48 object-cover"
            />
          </div>
          <div className="p-6 md:w-2/3">
            <h2 className="text-2xl font-semibold mb-4">Sustainability Goals</h2>
            <p className="text-base leading-7">
            Our initiatives focus on reducing waste, conserving resources, and promoting eco-friendly farming techniques.
            </p>
          </div>
        </div>

        {/* Partners Section */}
        <div className="flex flex-col md:flex-row bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden transition-transform hover:-translate-y-2">
          <div className="w-full md:w-1/3">
            <img
              src="https://www.shutterstock.com/image-photo/farm-handshake-closeup-partnership-collaboration-600nw-2227464691.jpg"
              alt="Partners"
              className="w-full h-48 object-cover"
            />
          </div>
          <div className="p-6 md:w-2/3">
            <h2 className="text-2xl font-semibold mb-4">Partners</h2>
            <p className="text-base leading-7">
            We collaborate with health-conscious businesses, research institutions, and non-profits to expand our impact.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

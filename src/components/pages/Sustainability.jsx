/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

const Sustainability = () => {
  return (
    <div className="p-6 bg-teal-50 dark:bg-gray-900 dark:text-white min-h-screen">
      <h1 className="text-4xl font-bold text-center text-teal-700 dark:text-teal-300 mb-10">
        Sustainability
      </h1>

      {/* Sustainable Practices Section */}
      <div className="flex flex-col lg:flex-row bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden mb-10 transition-transform transform hover:-translate-y-1">
        <div className="lg:w-1/2">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWHu8YheHbzh_I2cNv6A9nkLg1Xz2bEboywg&s"
            alt="Sustainable Practices"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="lg:w-1/2 p-6">
          <h2 className="text-2xl font-semibold text-teal-700 dark:text-teal-300 mb-4">
            Sustainable Practices
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
          ●	Eco-friendly farming techniques.<br />
         ●	Closed-loop waste management systems.

          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li className="text-gray-600 dark:text-gray-300">Eco-friendly farming techniques</li>
            <li className="text-gray-600 dark:text-gray-300">Biotech processes to reduce waste</li>
            <li className="text-gray-600 dark:text-gray-300">Water conservation practices</li>
            <li className="text-gray-600 dark:text-gray-300">Soil health restoration techniques</li>
          </ul>
        </div>
      </div>

      {/* Impact Reports Section */}
      <div className="flex flex-col lg:flex-row bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden mb-10 transition-transform transform hover:-translate-y-1">
        <div className="lg:w-1/2">
          <img
            src="https://media.licdn.com/dms/image/D5612AQH8kmE8P1b1Cw/article-cover_image-shrink_720_1280/0/1693542261847?e=2147483647&v=beta&t=YooLhe5Y4kEIfyOSz1kjNga5pXaMgx_AaB4xJ-ji1XA"
            alt="Impact Reports"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="lg:w-1/2 p-6">
          <h2 className="text-2xl font-semibold text-teal-700 dark:text-teal-300 mb-4">Impact Reports</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
          ●	Annual reports detailing environmental and social impact.
          </p>
          <button className="bg-teal-700 text-white px-4 py-2 rounded hover:bg-teal-800 dark:bg-gray-700 dark:hover:bg-gray-600">
            Download Latest Report
          </button>
        </div>
      </div>

      {/* Future Goals Section */}
      <div className="flex flex-col lg:flex-row bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden mb-10 transition-transform transform hover:-translate-y-1">
        <div className="lg:w-1/2">
          <img
            src="https://media.istockphoto.com/id/1511226415/photo/unlock-potential-of-business-success-stairs-dart-and-dartboard-targets-magnifying-glass-with.jpg?s=612x612&w=0&k=20&c=AyZSkt_ajo8JfbwJp9p86Ew24N37tMoq60hR5k_g9Rk="
            alt="Future Goals"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="lg:w-1/2 p-6">
          <h2 className="text-2xl font-semibold text-teal-700 dark:text-teal-300 mb-4">Future Goals</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
          ●	Expansion of sustainable practices across all operational levels.
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li className="text-gray-600 dark:text-gray-300">Carbon footprint reduction</li>
            <li className="text-gray-600 dark:text-gray-300">Further development of green technologies</li>
            <li className="text-gray-600 dark:text-gray-300">Enhanced community outreach programs</li>
            <li className="text-gray-600 dark:text-gray-300">Collaboration with global sustainability partners</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sustainability;

/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';
import image6 from "../../assets/logo_main-removebg-preview.png";
import { Link } from 'react-router-dom'; // If using React Router for routing
import HeroSection from './HeroSection';

const Homepage = () => {
  return (
    <>
      <HeroSection />
      <div className="bg-white dark:bg-gray-800 text-black dark:text-white">
        {/* Hero Section */}
        <section className="flex flex-wrap items-center justify-between px-6 py-12">
          <div className="flex-1 mr-6 text-center md:text-left">
            <img className="mx-auto md:mx-0 w-24 h-24 md:w-40 md:h-40" src={image6} alt="Logo" />
            <h1 className="text-4xl font-bold mt-4">Welcome to Manic Organix, Inc.</h1>
            <p className="text-lg mt-4">
            "Manic Organix, Inc. bridges the gap between fresh produce and cutting-edge biotechnology to redefine health and sustainability."
            </p>
            <div className="flex flex-col md:flex-row justify-center md:justify-start mt-6 gap-4">
              <Link
                to="/products-services"
                className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
              >
                Explore Products
              </Link>
              <Link
                to="/virtual-laboratory"
                className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
              >
                Visit Virtual Laboratory
              </Link>
              <Link
                to="/collaboration-center"
                className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
              >
                Collaborate in Real-Time
              </Link>
            </div>
          </div>
          <div className="mt-8 md:mt-0 md:ml-6 flex-1">
            <img
              className="w-full max-w-md mx-auto rounded-lg shadow-lg"
              src="https://d12aarmt01l54a.cloudfront.net/cms/images/Media-20220422144416/808-440.png"
              alt="Hero"
            />
          </div>
        </section>

        {/* Featured Sections */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 py-12 bg-gray-100 dark:bg-gray-900">
          {/* Section 1 */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Digital Health Ecosystem</h2>
            <div className="bg-white dark:bg-gray-700 bg-opacity-75 backdrop-blur-sm border border-gray-200 rounded-lg shadow-lg p-4">
              <img
                className="w-full h-auto max-w-xs mx-auto rounded-lg"
                src="https://media.licdn.com/dms/image/v2/C4D12AQEbhXulx93AVg/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1520113783588?e=2147483647&v=beta&t=GHBnTnq9zJAIKHZ-ZTDcpqHVZOyu0K0WzjOrc--5JQc"
                alt="Digital Health Ecosystem"
              />
              <p className="text-gray-600 dark:text-gray-300 mt-4">
              "Discover our revolutionary pipeline that integrates agriculture, research, and health innovation."
              </p>
            </div>
          </div>

          {/* Section 2 */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">AI-Powered Innovations</h2>
            <div className="bg-white dark:bg-gray-700 bg-opacity-75 backdrop-blur-sm border border-gray-200 rounded-lg shadow-lg p-4">
              <img
                className="w-full h-auto max-w-xs mx-auto rounded-lg"
                src="https://media.licdn.com/dms/image/D5612AQGvNyTXD4AhqQ/article-cover_image-shrink_600_2000/0/1719207285382?e=2147483647&v=beta&t=J1BEqMXJrsT8Acmf3XWBmBpwFiatSzmxQnOGdooVICw"
                alt="AI Innovations"
              />
              <p className="text-gray-600 dark:text-gray-300 mt-4">
              "Learn how our proprietary AI models are transforming the agricultural and biotech industries."
              ●	Fresh Produce Marketplace"
              </p>
            </div>
          </div>

          {/* Section 3 */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Fresh Produce Marketplace</h2>
            <div className="bg-white dark:bg-gray-700 bg-opacity-75 backdrop-blur-sm border border-gray-200 rounded-lg shadow-lg p-4">
              <img
                className="w-full h-auto max-w-xs mx-auto rounded-lg"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk-qpqYiLWjomdlup_AejVWqf38xQRLiQG8A&s"
                alt="Fresh Produce"
              />
              <p className="text-gray-600 dark:text-gray-300 mt-4">
              "Shop sustainably grown leafy greens that nourish your body and support our planet."
              </p>
            </div>
          </div>

          {/* Section 4 */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Testimonials</h2>
            <div className="bg-white dark:bg-gray-700 bg-opacity-75 backdrop-blur-sm border border-gray-200 rounded-lg shadow-lg p-4">
              <img
                className="w-full h-auto max-w-xs mx-auto rounded-lg"
                src="https://www.shutterstock.com/image-photo/hands-holding-green-happy-smile-600nw-2060680337.jpg"
                alt="Testimonials"
              />
              <p className="text-gray-600 dark:text-gray-300 mt-4">
              Quotes from health-conscious customers and partners.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Homepage;

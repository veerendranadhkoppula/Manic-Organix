/* eslint-disable no-unused-vars */
import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const ProductsServices = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white">
      <div className="p-10">
        <h1 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-10">
          Products & Services
        </h1>

        {/* Fresh Produce Section */}
        <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden mb-10 transition-transform transform hover:translate-y-1">
          <div className="flex flex-col md:flex-row">
            <div className="flex-1 min-w-[250px]">
              <Slider {...sliderSettings}>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA8trP_YWxp9I-LAZKH96Os7c1nsFu4QPLYQ&s"
                  alt="Fresh Produce 1"
                  className="w-full h-full object-cover"
                />
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi3Bf59a8WF7v5_1c4YLSqZrtIXKevFMMbFg&s"
                  alt="Fresh Produce 2"
                  className="w-full h-full object-cover"
                />
                <img
                  src="https://res.cloudinary.com/jerrick/image/upload/d_642250b563292b35f27461a7.png,f_jpg,fl_progressive,q_auto,w_1024/677ac42b274841001d85bb55.png"
                  alt="Fresh Produce 3"
                  className="w-full h-full object-cover"
                />
              </Slider>
            </div>
            <div className="flex-1 p-8">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
                Fresh Produce
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                ● Kale: High in vitamins A, C, and K.
                <br />
                ● Mustard Greens: Packed with antioxidants and
                anti-inflammatory properties.
                <br />
                ● Other Superfoods: Explore our rotating selection of seasonal
                greens.
                <br />
                ● Subscription Plans: Weekly deliveries of fresh, sustainably
                grown produce.
              </p>
            </div>
          </div>
        </div>

        {/* Agri-Medicines Section */}
        <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden mb-10 transition-transform transform hover:translate-y-1">
          <div className="flex flex-col md:flex-row">
            <div className="flex-1 min-w-[250px]">
              <img
                src="https://www.shutterstock.com/image-photo/dropper-over-test-tube-dropping-600nw-1556975729.jpg"
                alt="Agri Medicines"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 p-8">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
                Agri-Medicines
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                ● Biotech-derived treatments for chronic illnesses.
                <br />
                ● Nutritional supplements based on research from our laboratory.
              </p>
            </div>
          </div>
        </div>

        {/* Digital Health Ecosystem Section */}
        <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden mb-10 transition-transform transform hover:translate-y-1">
          <div className="flex flex-col md:flex-row">
            <div className="flex-1 min-w-[250px]">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcKLA9ZBWvLgUx2ACaLK__6rWmy9OxYUT6iw&s"
                alt="Digital Health"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 p-8">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
                Digital Health Ecosystem
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                ● Comprehensive digital solutions to enhance healthcare access
                and efficiency.
                <br />
                ● Integration of IoT devices and mobile apps for real-time
                monitoring.
              </p>
            </div>
          </div>
        </div>

        {/* Wholesale & Retail Opportunities Section */}
        <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden mb-10 transition-transform transform hover:translate-y-1">
          <div className="flex flex-col md:flex-row">
            <div className="flex-1 min-w-[250px]">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkjVvk58_9siouEkN-9D3p7V-BLb9oqvdlBw&s"
                alt="Wholesale & Retail"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 p-8">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
                Wholesale & Retail Opportunities
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                ● Partnerships with grocery chains, restaurants, and wellness
                centers.
                <br />
                ● Tailored solutions and business support for sustainable growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsServices;

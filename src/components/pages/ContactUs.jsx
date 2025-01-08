/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white p-4">
      {/* Flex container for both cards */}
      <div className="flex flex-wrap justify-center gap-6 w-full max-w-7xl">
        {/* Contact Form Card */}
        <div className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-md w-full max-w-md text-center">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
            Contact Us
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            We'd love to hear from you! Please fill out the form below, and we'll get back to you as soon as possible.
          </p>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-4 border border-gray-300 dark:border-gray-500 rounded-md bg-gray-100 dark:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-4 border border-gray-300 dark:border-gray-500 rounded-md bg-gray-100 dark:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full p-4 border border-gray-300 dark:border-gray-500 rounded-md bg-gray-100 dark:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 min-h-[150px] resize-y"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info (Our Office) Card with Image */}
        <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md w-full max-w-sm text-center">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
            Our Office
          </h2>

          {/* Image added here */}
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsua6XwPrVsLY8qy9RIgJEt9eKjI4wQj7znw&s" // Replace this with your actual image URL
            alt="Our Office"
            className="w-full h-48 object-cover rounded-md mb-4"
          />

          <p className="text-lg text-gray-600 dark:text-gray-300 mb-2">
            Manic Organix, Inc.
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-2">
            17350 STATE HWY 249, STE 220#14474 HOUSTON, TX 77064
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-2">
            Email: MANICORGANIXINC@GMAIL.COM
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Phone: (346) 298-1094
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

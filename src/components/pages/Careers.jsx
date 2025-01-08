/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Careers = () => {
  return (
    <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white">
      <div className="container mx-auto p-6">
        {/* Page Title */}
        <motion.h1
          className="text-5xl font-extrabold text-center mb-8 text-gradient bg-clip-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Careers at Manic Organix, Inc.
        </motion.h1>

        {/* Current Openings Section */}
        <section className="mb-16">
          <motion.h2
            className="text-4xl font-semibold text-center mb-6 text-green-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Current Openings
          </motion.h2>

          <div className="flex flex-wrap justify-center gap-6">
            {/* Role 1 */}
            <motion.div
              className="w-72 bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEQWwybrFNWnKQ1sZLrn4gGRtk8SCAzmwFrA&s"
                alt="Agri-Tech Role"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">Agri-Tech Data Scientist</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">Join our team to drive data-driven solutions in agriculture using AI and machine learning technologies.</p>
                <Link to="/apply" className="inline-block bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">Apply Now</Link>
              </div>
            </motion.div>

            {/* Role 2 */}
            <motion.div
              className="w-72 bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-HOnKzMUMMnYMY6joz48yTI2xxlFVkSgtdw&s"
                alt="Biotech Role"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">Biotech Researcher</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">Be part of our research team to develop innovative biotechnologies in agriculture and healthcare.</p>
                <Link to="/apply" className="inline-block bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">Apply Now</Link>
              </div>
            </motion.div>

            {/* Role 3 */}
            <motion.div
              className="w-72 bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw6US8UTP4l4EL0Xxh-du4mQx3h1Jbn05HGA&s"
                alt="Marketing Role"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">Marketing Manager</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">Lead our marketing team to expand the reach of our agri-tech solutions globally.</p>
                <Link to="/apply" className="inline-block bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">Apply Now</Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Internship Programs Section */}
        <section className="mb-16">
          <motion.h2
            className="text-4xl font-semibold text-center mb-6 text-green-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Internship Programs
          </motion.h2>

          <div className="flex flex-wrap justify-center gap-6">
            {/* Internship Role 1 */}
            <motion.div
              className="w-72 bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEQWwybrFNWnKQ1sZLrn4gGRtk8SCAzmwFrA&s"
                alt="Agri-Tech Intern"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">Agri-Tech Intern</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">Get hands-on experience working on AI and data science projects in agriculture.</p>
                <Link to="/apply" className="inline-block bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">Apply Now</Link>
              </div>
            </motion.div>

            {/* Internship Role 2 */}
            <motion.div
              className="w-72 bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-HOnKzMUMMnYMY6joz48yTI2xxlFVkSgtdw&s"
                alt="Biotech Intern"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">Biotech Intern</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">Collaborate with our biotech researchers on groundbreaking innovations in agriculture.</p>
                <Link to="/apply" className="inline-block bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">Apply Now</Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Culture & Values Section */}
        <section className="mb-16">
          <motion.h2
            className="text-4xl font-semibold text-center mb-6 text-green-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Culture & Values
          </motion.h2>
          <p className="text-lg text-center text-gray-700 dark:text-gray-300 mb-4">
            At Manic Organix, we foster a collaborative, inclusive, and innovative environment where everyone’s ideas matter.
          </p>
          <p className="text-lg text-center text-gray-700 dark:text-gray-300">
            Our culture is rooted in values of sustainability, innovation, and social responsibility. We believe in empowering our team to achieve their full potential while making a meaningful impact on the world.
          </p>
          <div className="text-center mt-6">
            <Link to="/learn-more" className="inline-block bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">Learn More</Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Careers;

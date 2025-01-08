/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

const FormPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    resume: null,
    role: '',
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      resume: e.target.files[0],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage('Successfully Applied!');
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white p-4">
      <div className="w-full max-w-md bg-white dark:bg-gray-700 p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6">Job Application Form</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-semibold text-gray-700 dark:text-gray-300"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 mt-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 bg-gray-50 dark:bg-gray-800"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-700 dark:text-gray-300"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 mt-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 bg-gray-50 dark:bg-gray-800"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="phone"
              className="block text-sm font-semibold text-gray-700 dark:text-gray-300"
            >
              Phone Number
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-3 mt-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 bg-gray-50 dark:bg-gray-800"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="resume"
              className="block text-sm font-semibold text-gray-700 dark:text-gray-300"
            >
              Upload Resume
            </label>
            <input
              type="file"
              id="resume"
              name="resume"
              onChange={handleFileChange}
              className="w-full p-3 mt-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 bg-gray-50 dark:bg-gray-800"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="role"
              className="block text-sm font-semibold text-gray-700 dark:text-gray-300"
            >
              Select Role
            </label>
            <select
              id="role"
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full p-3 mt-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 bg-gray-50 dark:bg-gray-800"
              required
            >
              <option value="" disabled>
                Select a role
              </option>
              <option value="Agri-Tech Data Scientist">Agri-Tech Data Scientist</option>
              <option value="Biotech Researcher">Biotech Researcher</option>
              <option value="Marketing Manager">Marketing Manager</option>
              <option value="Agri-Tech Intern">Agri-Tech Intern</option>
              <option value="Biotech Intern">Biotech Intern</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full p-3 bg-blue-500 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
          >
            Submit
          </button>
        </form>

        {message && (
          <div className="mt-4 text-center text-green-500 font-semibold">
            {message}
          </div>
        )}
      </div>
    </div>
  );
};

export default FormPage;

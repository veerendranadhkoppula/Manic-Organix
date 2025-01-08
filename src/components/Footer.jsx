/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { FaTwitter, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { GiPalmTree } from "react-icons/gi";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    alert(`Subscribed with email: ${email}`);
    setEmail("");
  };

  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-4 flex flex-wrap justify-around space-y-10 sm:space-y-0">
        {/* Quick Links */}
        <div className="w-full sm:w-1/3 lg:w-1/4">
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/about-us" className="hover:underline">About Us</a></li>
            <li><a href="/products-services" className="hover:underline">Products & Services</a></li>
            <li><a href="/innovations" className="hover:underline">Innovations</a></li>
            <li><a href="/sustainability" className="hover:underline">Sustainability</a></li>
            <li><a href="/careers" className="hover:underline">Careers</a></li>
            <li><a href="/contact-us" className="hover:underline">Contact Us</a></li>
          </ul>
        </div>

        {/* Contact Information */}
        <div className="w-full sm:w-1/3 lg:w-1/4">
          <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
          <p><strong>Address:</strong> 17350 STATE HWY 249, STE 220#14474 HOUSTON, TX 77064</p>
          <p><strong>Phone:</strong> (346) 298-1094</p>
          <p className="flex items-center"><AiOutlineMail className="mr-2" /> MANICORGANIXINC@GMAIL.COM</p>
        </div>

        {/* Social Media */}
        <div className="w-full sm:w-1/3 lg:w-1/4">
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4 text-2xl">
          <a href="https://www.facebook.com/people/Manic-Organix" target="_blank" rel="noopener noreferrer" className="hover:text-green-500"><FaFacebook /></a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-green-500"><FaTwitter /></a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-green-500"><FaLinkedin /></a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-green-500"><FaInstagram /></a>
            
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="w-full sm:w-1/3 lg:w-1/4">
          <h3 className="text-xl font-semibold mb-4">Newsletter Signup</h3>
          <p>Stay updated on our latest innovations.</p>
          <form onSubmit={handleNewsletterSubmit} className="mt-4 flex">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 px-4 py-2 rounded-l-md focus:outline-none text-black"
            />
            <button type="submit" className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-r-md">Subscribe</button>
          </form>
        </div>

        {/* Awards & Certifications */}
        <div className="w-full sm:w-1/3 lg:w-1/4">
          <h3 className="text-xl font-semibold mb-4">Awards & Certifications</h3>
          <div className="flex items-center space-x-4">
            <GiPalmTree size={40} />
            <p>Best Green Business 2023</p>
          </div>
          <div className="flex items-center space-x-4 mt-2">
            <GiPalmTree size={40} />
            <p>Certified Organic Producer</p>
          </div>
        </div>
      </div>
      <div className="mt-10 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} Manic Organix. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

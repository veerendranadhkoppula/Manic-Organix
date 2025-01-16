/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link } from "react-router-dom"; // If using React Router for routing
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi"; // Hamburger menu icons
import logo from "../../assets/logo main.webp"; // Adjust this path to the location of your logo image
import DarkMode from "./DarkMode"; // Add Dark Mode functionality if needed

// Define the menu links as a constant
export const MenuLinks = [
  { id: 1, name: "Home", link: "/" },
  { id: 2, name: "About Us", link: "/about-us" },
  { id: 3, name: "Products & Services", link: "/products-services" },
  { id: 4, name: "Virtual Laboratory", link: "/virtual-laboratory" },
  { id: 5, name: "Collaboration Center", link: "/collaboration-center" },
  { id: 6, name: "Innovations", link: "/innovations" },
  { id: 7, name: "Sustainability", link: "/sustainability" },
  { id: 8, name: "Careers", link: "/careers" },
  { id: 9, name: "Contact Us", link: "/contact-us" },
  {
    id: 10,
    name: "AquaGenetics AI Lab",
    link: "https://phoenixlabs-agal.onrender.com/aitools",
    external: true,
  },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="relative z-10 w-full dark:bg-black dark:text-white duration-300">
      <div className="container py-3 md:py-2">
        <div className="flex justify-between items-center">
          {/* Logo section */}
          <div className="flex items-center gap-3">
            <img src={logo} alt="Manic Organix Logo" className="w-5" />
            <span className="text-2xl sm:text-3xl font-semibold mr-10">
              Manic Organix.
            </span>
          </div>

          {/* Desktop view Navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-9">
              {MenuLinks.map(({ id, name, link, external }) => (
                <li key={id} className="py-4">
                  {external ? (
                    <a
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg font-medium hover:text-primary py-2 hover:border-b-2 hover:border-primary transition-colors duration-500"
                    >
                      {name}
                    </a>
                  ) : (
                    <Link
                      to={link}
                      className="text-lg font-medium hover:text-primary py-2 hover:border-b-2 hover:border-primary transition-colors duration-500"
                    >
                      {name}
                    </Link>
                  )}
                </li>
              ))}

              <DarkMode />
            </ul>
          </nav>

          {/* Mobile view Drawer */}
          <div className="flex items-center gap-4 md:hidden">
            <DarkMode />
            {/* Mobile Hamburger icon */}
            {menuOpen ? (
              <HiMenuAlt1
                onClick={toggleMenu}
                className="cursor-pointer transition-all"
                size={30}
              />
            ) : (
              <HiMenuAlt3
                onClick={toggleMenu}
                className="cursor-pointer transition-all"
                size={30}
              />
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-black">
          <ul className="flex flex-col gap-4 p-4">
            {MenuLinks.map(({ id, name, link, external }) => (
              <li key={id}>
                {external ? (
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-lg font-medium hover:text-primary"
                  >
                    {name}
                  </a>
                ) : (
                  <Link
                    to={link}
                    className="block text-lg font-medium hover:text-primary"
                  >
                    {name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;

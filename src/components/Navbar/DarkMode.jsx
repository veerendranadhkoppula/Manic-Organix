/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { BiSolidSun, BiSolidMoon } from "react-icons/bi";

const DarkMode = () => {
  // Retrieve theme from localStorage or default to 'light'
  const [theme, setTheme] = React.useState(
    localStorage.getItem("theme") || "light"
  );

  const element = document.documentElement; // Access to the <html> element

  // Update theme on state change and persist in localStorage
  React.useEffect(() => {
    localStorage.setItem("theme", theme);
    if (theme === "dark") {
      element.classList.add("dark");
      element.classList.remove("light");
    } else {
      element.classList.add("light");
      element.classList.remove("dark");
    }
  }, [theme]); // Re-run effect whenever `theme` changes

  // Handle theme toggle
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center justify-center p-2 rounded transition-all hover:bg-gray-200 dark:hover:bg-gray-700"
    >
      {theme === "dark" ? (
        <BiSolidSun className="text-2xl text-yellow-400" />
      ) : (
        <BiSolidMoon className="text-2xl text-gray-800" />
      )}
    </button>
  );
};

export default DarkMode;

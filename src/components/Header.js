import React, { useState, useEffect } from "react";
import { RiContactsFill } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import { FaSignOutAlt } from "react-icons/fa"; // Corrected sign-out icon
import { CiDark } from "react-icons/ci";
import { IoIosNotifications } from "react-icons/io";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark"); // Enable dark mode
    } else {
      document.body.classList.remove("dark"); // Disable dark mode
    }
  }, [darkMode]);

  return (
    <header className="bg-teal-400 text-white h-[90px] flex justify-between items-center px-6 py-4 sm:px-4 md:px-6">
      {/* Logo Section */}
      <div className="flex items-center flex-1">
        <i>
          <h1 className="text-3xl sm:text-4xl font-bold">Helpdesk</h1>
        </i>
      </div>

      {/* Navigation Icons */}
      <nav className="flex items-center space-x-6 sm:space-x-4">
        {/* Dark Mode Toggle */}
        <button
          aria-label="Toggle Dark Mode"
          onClick={() => setDarkMode(!darkMode)} // Toggle dark mode on click
          className="hover:text-gray-200"
        >
          <CiDark size={24} />
        </button>
        <NavLink
          to="/notifiaction"
          aria-label="notification"
          className="hover:text-gray-200"
        >
          <IoIosNotifications className="text-3xl" />
        </NavLink>

        {/* Contact Page */}
        <NavLink
          to="/contact"
          aria-label="Contact Us"
          className="hover:text-gray-200"
        >
          <RiContactsFill size={24} />
        </NavLink>

        {/* Logout */}
        <NavLink
          to="/signIn"
          aria-label="signIn"
          className="hover:text-gray-200"
        >
          <FaSignOutAlt size={24} />
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;

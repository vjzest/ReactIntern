import React, { useState } from "react";
import UserSection from "./UserSection";
import TechnicalSupport from "./TechnicalSupport";
import AdminSection from "./AdminSection";
import { IoIosArrowDown } from "react-icons/io";
import { NavLink } from "react-router-dom";

const Verticalheader = () => {
  const [isUserDropdownOpen, setUserDropdownOpen] = useState(false);
  const [isTechnicalDropdownOpen, setTechnicalDropdownOpen] = useState(false);
  const [isAdminDropdownOpen, setAdminDropdownOpen] = useState(false);

  const toggleUserDropdown = () => setUserDropdownOpen(!isUserDropdownOpen);
  const toggleTechnicalDropdown = () =>
    setTechnicalDropdownOpen(!isTechnicalDropdownOpen);
  const toggleAdminDropdown = () => setAdminDropdownOpen(!isAdminDropdownOpen);

  return (
    <div className="bg-gray-400 flex flex-col h-screen w-full sm:w-1/4 md:w-1/5 p-2">
      {/* Scrollable Section */}
      <div className="flex-grow overflow-y-auto">
        <nav className="flex flex-col gap-4 p-4">
          {/* User Section Dropdown */}
          <div>
            <button
              onClick={toggleUserDropdown}
              className="flex items-center justify-between py-2 px-4 rounded w-full hover:bg-teal-200 text-sm md:text-base"
            >
              <b>User Section</b>
              <IoIosArrowDown
                className={`ml-2 transition-transform ${
                  isUserDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {isUserDropdownOpen && (
              <div className="mt-2 bg-gray-300 rounded-lg shadow-lg">
                <UserSection />
              </div>
            )}
          </div>

          {/* Technical Support Dropdown */}
          <div>
            <button
              onClick={toggleTechnicalDropdown}
              className="flex items-center justify-between py-2 px-4 rounded w-full hover:bg-teal-200 text-sm md:text-base"
            >
              <b>Technical Support</b>
              <IoIosArrowDown
                className={`ml-2 transition-transform ${
                  isTechnicalDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {isTechnicalDropdownOpen && (
              <div className="mt-2 bg-gray-300 rounded-lg shadow-lg">
                <TechnicalSupport />
              </div>
            )}
          </div>

          {/* Admin Section Dropdown */}
          <div>
            <button
              onClick={toggleAdminDropdown}
              className="flex items-center justify-between py-2 px-4 rounded w-full hover:bg-teal-200 text-sm md:text-base"
            >
              <b>Admin Section</b>
              <IoIosArrowDown
                className={`ml-2 transition-transform ${
                  isAdminDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {isAdminDropdownOpen && (
              <div className="mt-2 bg-gray-300 rounded-lg shadow-lg">
                <AdminSection />
              </div>
            )}
          </div>
        </nav>
      </div>

      {/* Footer Section */}
    </div>
  );
};

export default Verticalheader;

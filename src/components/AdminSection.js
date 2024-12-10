import React from "react";
import { NavLink } from "react-router-dom";
import { LuLayoutDashboard } from "react-icons/lu";
import { FaTicketSimple } from "react-icons/fa6";
import { FaDatabase } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { FaHistory } from "react-icons/fa";

const AdminSection = () => {
  return (
    <div className="w-1/8 bg-gray-400 h-screen flex flex-col">
      <nav className="flex flex-col  gap-4 p-4">
        <NavLink
          to="/admindashboard"
          className="hover:bg-teal-200 py-2 px-4 rounded "
          activeClassName="bg-teal-400"
        >
          <div className="flex flex-row  gap-2 py-2 justify-items-center">
            <LuLayoutDashboard className="mt-1" />
            <b>Dashboard</b>
          </div>
        </NavLink>

        <NavLink
          to="/database"
          className="hover:bg-teal-200 py-2 px-4 rounded"
          activeClassName="bg-teal-400"
        >
          <div className="flex flex-row  gap-2 py-2 justify-items-center">
            <FaDatabase className="mt-1" />
            <b>Database</b>
          </div>
        </NavLink>
        <NavLink
          to="/setting"
          className="hover:bg-teal-200 py-2 px-4 rounded"
          activeClassName="bg-teal-400"
        >
          <div className="flex flex-row  gap-2 py-2 justify-items-center">
            <IoSettingsOutline className="mt-1" />
            <b>Setting</b>
          </div>
        </NavLink>
        <NavLink
          to="/userlog-history"
          className="hover:bg-teal-200 py-2 px-4 rounded"
          activeClassName="bg-teal-400"
        >
          <div className="flex flex-row  gap-2 py-2 justify-items-center">
            <FaHistory className="mt-1" />

            <b>UserLog History</b>
          </div>
        </NavLink>
      </nav>
    </div>
  );
};

export default AdminSection;

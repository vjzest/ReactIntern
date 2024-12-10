import React from "react";
import { NavLink } from "react-router-dom";
import { LuLayoutDashboard } from "react-icons/lu";
import { FaTicketSimple } from "react-icons/fa6";
import { HiTicket } from "react-icons/hi2";
import { BsTicketDetailedFill } from "react-icons/bs";
import { MdPermDataSetting } from "react-icons/md";

const TechnicalSupport = () => {
  return (
    <div className="w-1/8 bg-gray-400 h-screen flex flex-col">
      <nav className="flex flex-col  gap-4 p-4">
        <NavLink
          to="/techincaldashboard"
          className="hover:bg-teal-200 py-2 px-4 rounded "
          activeClassName="bg-teal-400"
        >
          <div className="flex flex-row  gap-2 py-2 justify-items-center">
            <LuLayoutDashboard className="mt-1" />
            <b>Dashboard</b>
          </div>
        </NavLink>
        <NavLink
          to="/ticket-approval"
          className="hover:bg-teal-200 py-2 px-4 rounded"
          activeClassName="bg-teal-400"
        >
          <div className="flex flex-row  gap-2 py-2 justify-items-center">
            <BsTicketDetailedFill className="mt-1" />
            <b>Ticket Approval</b>
          </div>
        </NavLink>
        <NavLink
          to="/my-ticket"
          className="hover:bg-teal-200 py-2 px-4 rounded"
          activeClassName="bg-teal-400"
        >
          <div className="flex flex-row  gap-2 py-2 justify-items-center">
            <FaTicketSimple className="mt-1" />
            <b>My Ticket</b>
          </div>
        </NavLink>
        <NavLink
          to="/performance"
          className="hover:bg-teal-200 py-2 px-4 rounded"
          activeClassName="bg-teal-400"
        >
          <div className="flex flex-row  gap-2 py-2 justify-items-center">
            <MdPermDataSetting className="mt-1" />

            <b>Performance</b>
          </div>
        </NavLink>
      </nav>
    </div>
  );
};

export default TechnicalSupport;

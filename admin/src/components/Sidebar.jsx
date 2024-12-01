import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { DoctorContext } from "../context/DoctorContext";
import { AdminContext } from "../context/AdminContext";

const Sidebar = () => {
  const { dToken } = useContext(DoctorContext);
  const { aToken } = useContext(AdminContext);

  return (
    <div className="min-h-screen bg-gray-50 shadow-md border-r w-64">
      {aToken && (
        <ul className="mt-6 text-gray-700">
          <SidebarLink to="/admin-dashboard" label="Dashboard" icon="home" />
          <SidebarLink
            to="/all-appointments"
            label="Appointments"
            icon="calendar"
          />
          <SidebarLink to="/add-doctor" label="Add Doctor" icon="user-plus" />
          <SidebarLink to="/doctor-list" label="Doctors List" icon="users" />
          <Divider />
        </ul>
      )}
      {dToken && (
        <ul className="mt-6 text-gray-700">
          <SidebarLink
            to="/doctor-dashboard"
            label="Dashboard"
            icon="home"
          />
          <SidebarLink
            to="/doctor-appointments"
            label="Appointments"
            icon="calendar"
          />
          <SidebarLink
            to="/doctor-profile"
            label="Profile"
            icon="user-circle"
          />
        </ul>
      )}
    </div>
  );
};

const SidebarLink = ({ to, label, icon }) => {
  const iconPaths = {
    home: "M10 20v-6h4v6m1-8h6M4 12h6m0 0L12 2m0 0l2 10m8 2H2",
    calendar:
      "M8 7v1m8-1v1m-6 4h4m-4 4h4m-4-8h4m1 0V7m-6 0V7m9-2h-2m-6 0H5m9 12a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2h-2a2 2 0 00-2 2v12z",
    "user-plus":
      "M16 14v6M19 17h-6m-5-2a4 4 0 100-8 4 4 0 000 8zm0 0c2.2 0 4 1.5 4 3.5 0 1.5-1.8 2.5-4 2.5s-4-1-4-2.5c0-2 1.8-3.5 4-3.5z",
    users:
      "M17 20h5v-1a5 5 0 00-5-5h-1a5 5 0 00-5 5v1h5m5-9a3 3 0 100-6 3 3 0 000 6zM9 20H4v-1a5 5 0 015-5h1a5 5 0 015 5v1H9m-5-9a3 3 0 110-6 3 3 0 010 6z",
    "user-circle":
      "M10 12a5 5 0 10-5 5v1h10v-1a5 5 0 10-5-5zm6.1-6a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z",
  };

  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center gap-3 py-3 px-4 rounded-lg cursor-pointer transition ${
          isActive
            ? "bg-blue-100 text-blue-600 font-medium"
            : "hover:bg-gray-100 hover:text-gray-800"
        }`
      }
    >
      <svg
        className="w-5 h-5 text-gray-600"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d={iconPaths[icon]}
        />
      </svg>
      <p>{label}</p>
    </NavLink>
  );
};

const Divider = () => <hr className="my-4 mx-4 border-gray-200" />;

export default Sidebar;

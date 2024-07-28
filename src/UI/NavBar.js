import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from "../assets/images/logo.png";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <NavLink to="/" end={true}>
              <img src={logo} alt="Logo" className="h-8 w-auto" />
            </NavLink>
          </div>
          <div className="block lg:hidden">
            <button
              className="text-gray-800 hover:text-gray-600 focus:outline-none"
              onClick={toggleMenu}
            >
              {isOpen ? (
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink
                exact
                to="/"
                className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium"
                activeClassName="text-indigo-600"
              >
                Home
              </NavLink>
              <NavLink
                to="/jobs"
                className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium"
                activeClassName="text-indigo-600"
              >
                Find Jobs
              </NavLink>
              <NavLink
                to="/add"
                className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium"
                activeClassName="text-indigo-600"
              >
                Add Job
              </NavLink>
            </div>
          </div>
        </div>
      </div>

      <div className={`lg:hidden ${isOpen ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <NavLink
            exact
            to="/"
            className="block text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-base font-medium"
            activeClassName="text-indigo-600"
          >
            Home
          </NavLink>
          <NavLink
            to="/jobs"
            className="block text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-base font-medium"
            activeClassName="text-indigo-600"
          >
            Find Jobs
          </NavLink>
          <NavLink
            to="/add"
            className="block text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-base font-medium"
            activeClassName="text-indigo-600"
          >
            Add Job
          </NavLink>
        </div>
      </div>
      <Outlet />
    </nav>
  );
};

export default NavBar;

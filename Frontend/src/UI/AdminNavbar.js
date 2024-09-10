import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from "../assets/images/logo.png";
import './NavBar.css';

const AdminNavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    const confirmLogout = window.confirm("Are you sure you want to logout?");
    if (confirmLogout) {
      // Clear authentication data (if any)
      // Example: localStorage.removeItem('authToken');

      // Redirect to the HomeScreen page
      navigate('/'); // Redirect to HomeScreen
    }
  };

  return (
    <nav className="bg-white shadow-md header">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <NavLink to="/client-home" end={true}>
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
          <div className={`${isOpen ? 'block' : 'hidden'} lg:block`}>
            <div className="ml-10 flex items-baseline space-x-4">
              <button
                onClick={handleLogout}
                className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default AdminNavBar;

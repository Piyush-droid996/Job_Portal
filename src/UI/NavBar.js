import React, { useState } from "react";
import "./NavBar.css";
import { NavLink, Outlet } from "react-router-dom";
import logo from "../assets/images/logo.png"// Adjust the path as per your project structure

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-header">
          <div className="nav-title">
            <NavLink to="/" end={true}>
              <img src={logo} alt="Logo" className="logo-img" />
            </NavLink>
          </div>
          <button className="nav-toggle" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        <ul className={`nav-ul ${isOpen ? "show" : ""}`}>
          <li className="nav-li">
            <NavLink activeClassName="active" to="/" end={true}>Home</NavLink>
          </li>
          <li className="nav-li">
            <NavLink activeClassName="active" to="/jobs">Sagarika</NavLink>
          </li>
          <li className="nav-li">
            <NavLink activeClassName="active" to="/add">Add Job</NavLink>
          </li>
        </ul>
      </div>
      <Outlet />
    </nav>
  );
};

export default NavBar;

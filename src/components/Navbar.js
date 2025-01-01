import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
    return (
      <nav className="navbar">
        <div className="navbar-container">
        <div className="navbar-left">
        <img
          src="https://th.bing.com/th/id/OIP.cghvs5AIARUuJ4ZB2QSBtwAAAA?rs=1&pid=ImgDetMain"
          alt="Logo"
          className="navbar-logo"
        />
        <span className="navbar-title">ISTA Lazaret</span>
      </div>
          <ul className="navbar-links">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/login">Login</a></li>
          </ul>
        </div>
      </nav>
    );
  };

export default Navbar;

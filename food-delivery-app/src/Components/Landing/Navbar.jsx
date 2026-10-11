import React from "react";
import { Link } from "react-router-dom";
import "./landingpage.css";
import logo from "../../assets/fast.png";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="logo" className="logo-img" />
        <h1 className="logo-text">
          Fast
          <span>Chops</span>
        </h1>
        
      </div>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/register" className="signup-btn">
          Sign Up
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;

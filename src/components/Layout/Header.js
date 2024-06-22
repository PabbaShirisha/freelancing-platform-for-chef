import React from "react";
import { Link } from "react-router-dom";
import "./Layout.css";

const Header = () => {
  return (
    <header>
      <h1>Chef Freelance Platform</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <Link to="/browse-chefs">Browse Chefs</Link>
        <Link to="/about-us">About US</Link>
      </nav>
    </header>
  );
};

export default Header;

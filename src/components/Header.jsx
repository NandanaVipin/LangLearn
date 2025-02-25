import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <nav className="header">
      <h1>LangLearn</h1>
      <div className="nav-links">
        <Link to="/">🏠 Home</Link>
        <Link to="/learn">📖 Learn</Link>
        <Link to="/profile">👤 Profile</Link>
      </div>
    </nav>
  );
};

export default Header;

import React from "react";
import { Link } from "react-router-dom";
import "../App.scss";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-links">
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>

          <Link to="/projects">
            <li>Projects</li>
          </Link>

          <Link to="/contact">
            <li>Contact</li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

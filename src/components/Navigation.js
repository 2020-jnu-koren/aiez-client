import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
    <div className="nav">
      <div className="nav__center">
        <div className="logo">This will be filled with our logo!</div>
        <Link className="nav_item" to="/">
          Home
        </Link>
        <Link className="nav_item" to="/about">
          About
        </Link>
        <Link className="nav_item" to="/project">
          Project
        </Link>
        <Link className="nav_item" to="/more_models">
          More Models
        </Link>
      </div>
    </div>
  );
}

export default Navigation;

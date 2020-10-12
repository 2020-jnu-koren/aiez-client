import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";
import logo1 from "./img/logo1.png";

function Navigation() {
  return (
    <div className="nav">
      <div className="nav__center">
        <Link className="nav_item" to="/">
          <img className="logo" src={logo1} alt="img" />
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

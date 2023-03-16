import "./NavbarStyle.css";

import React from 'react'
import { Link } from "react-router-dom";

import { FaBars } from "react-icons/fa"

const Navbar = () => {
  return (
    <div className="header">
      <Link to="/">
        <h1>Vinita Yadav</h1>
      </Link>
      <ul className="nav-items">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/about">About Me</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <div className="hamburger">
          <FaBars size={20} style={{ color: "#fff"}} 
          />
        </div>

    </div>
  )
}

export default Navbar;

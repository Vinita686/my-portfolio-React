import "./NavbarStyle.css";

import React from 'react'
import { Link } from "react-router-dom";

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

    </div>
  )
}

export default Navbar;

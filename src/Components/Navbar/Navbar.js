import "./NavbarStyle.css";

import React, {useState }from 'react'
import { Link } from "react-router-dom";

import { FaBars, FaTimes } from "react-icons/fa";

import avatar from "../../assets/myImg.jpg";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);


  return (
    <div className="header">
      <div className="my-pic">
        <img className="image" src={avatar} alt="avatar" />
      <Link to="/">
        <h1>Vinita Yadav</h1>
      </Link>
      </div>
      <ul className={click ? "nav-items active" : "nav-items"}>
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
        <div className="hamburger" onClick={handleClick}>
          {click ? (
            <FaTimes size={20} style={{ color: "#fff"}} 
          />
          ) : (
            <FaBars size={20} style={{ color: "#fff"}} 
          />
          )}
          
          
        </div>

    </div>
  )
}

export default Navbar;

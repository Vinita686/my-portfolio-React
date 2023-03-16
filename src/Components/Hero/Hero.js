import "./HeroStyle.css";

import React from 'react'
import HeroImg from "../../assets/hero_bg.jpg"
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="intro-img" src={HeroImg} alt="HeroImg" />
        </div>
        <div className="content">
            <p>Hi, Welcome to my Portfolio.</p>
            <h1>I am a Front-End Web Developer.</h1>
        </div>
        <div>
            <Link to="/project" className="btn">Projects</Link>
            <Link to="/contact" className="btn btn-light">Contact</Link>
        </div>

    </div>
  )
}

export default Hero;
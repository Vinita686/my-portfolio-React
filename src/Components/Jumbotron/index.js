import "./style.css";

import React from 'react'
import HeroImg from "../../assets/jumbotron.jpg"



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

    </div>
  )
}

export default Hero;
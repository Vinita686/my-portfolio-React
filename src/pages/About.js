import React from 'react'
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import HeroImg from '../Components/HeroImg';

export const About = () => {
  return (
    <div>
      <Navbar />
      <HeroImg heading="Hello, I'm Vinita." text="A Passionate Web Developer." />
      <Footer />
    </div>
  )
}

export default About;
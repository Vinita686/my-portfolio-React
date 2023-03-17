import React from 'react'
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import HeroImg from '../Components/HeroImg/HeroImg';

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
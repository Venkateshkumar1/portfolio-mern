import React from 'react';
import AboutContent from '../components/AboutContent';

import Footer from '../components/Footer';
import HeroImg from '../components/HeroImg';
import Navbar from '../components/Navbar';

const About = () => {
  return (
    <div>
    <Navbar/>
    <HeroImg heading="ABOUT" text="Im a friendly Full Stack Web Developer."/>
    <AboutContent/>
    <Footer/>
    </div>
  )
}

export default About;
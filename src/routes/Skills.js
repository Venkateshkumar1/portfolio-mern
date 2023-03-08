import React from 'react';

import Footer from '../components/Footer';
import HeroImg from '../components/HeroImg';
import Navbar from '../components/Navbar';
import SkillView from '../components/SkillView';

const Skills = () => {
  return (
    <div>
       <Navbar/>
      <HeroImg heading="SKILLS" text="Let's know about my skills"/>
      <SkillView/>
      <Footer/>
    </div>
  )
}

export default Skills;
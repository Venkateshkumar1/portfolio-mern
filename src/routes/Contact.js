import React from 'react';

import Footer from '../components/Footer';
import HeroImg from '../components/HeroImg';
import Navbar from '../components/Navbar';

const Contact = () => {
  return (
  <div>
      <Navbar/>
      <HeroImg heading="CONTACT" text="Lets have a chat"/>
      <Footer/>
  </div>
  );
}

export default Contact;
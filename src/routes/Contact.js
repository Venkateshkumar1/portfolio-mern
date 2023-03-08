import React from 'react';

import Footer from '../components/Footer';
import Form from '../components/Form';
import HeroImg from '../components/HeroImg';
import Navbar from '../components/Navbar';


const Contact = () => {
  return (
  <div>
      <Navbar/>
      <HeroImg heading="CONTACT" text="Lets have a chat"/>
      <Form/>
      <Footer/>
  </div>
  );
};

export default Contact;
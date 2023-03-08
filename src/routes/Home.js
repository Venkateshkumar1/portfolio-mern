import React from 'react';
import Footer from '../components/Footer';
import HomeImg from '../components/HomeImg';
import Navbar from '../components/Navbar';
import Work from '../components/Work';

const Home = () => {
  return <div>
      <Navbar/>
      <HomeImg/>
      <Work/>
      <Footer/>
    </div>
  
};

export default Home;
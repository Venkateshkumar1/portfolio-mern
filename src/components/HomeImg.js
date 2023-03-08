import "./HomeImg.css";
import React from 'react';
import IntroImg from "../assets/IntroImg.jpg";
import { Link } from "react-router-dom";

const HomeImg = () => {
  return (
    <div className='hero'>
    <div className='mask'>
    <img className="intro-img" src={IntroImg} alt="IntroImg"/>
    </div>
    <div className="content">
        <p>HI, I'AM VENKATESHKUMAR</p>
        <h1>Full Stack Web<br/> Developer (MERN).</h1>
        <div>
          <Link to='/project'
          className='btn'>Projects
          </Link>
          <Link to='/contact'
          className='btn btn-light'>contact
          </Link>
        </div>
      </div>
    </div>
  )
}

export default HomeImg;

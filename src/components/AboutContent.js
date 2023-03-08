import "./AboutContent.css";

import React from 'react';
import { Link } from "react-router-dom";
import Fsd1 from "../assets/Fsd1.jpg";
import Fsd2 from "../assets/Fsd2.jpg";

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
       <h1>WHO AM I?</h1>
       <p>Im a Full Stack Web Developer. I create a responsive secure websites for my clients.</p>
       <Link to="/contact">
        <button className="btn">CONTACT</button>
       </Link>
      </div>

      <div className="right">
      <div className="img-container">
        <div className="img-stack top">
          <img src={Fsd2} className="img" alt="true"/>
          </div>
          <div className="img-stack bottom">
          <img src={Fsd1} className="img" alt="true"/>
        </div>
      </div>
      </div>
    </div>
  )
}

export default AboutContent;

import "./Footer.css";

import React from 'react';

import { FaGithub, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
       <div className="left"></div>
       <div className="location">
        <FaHome size={20} style={{ color: "#fff" , marginTop:"1rem" ,marginRight: "2rem"}}/>
        <div>
            <p>244 Poosariyur patlur</p>
            <p>Anthiyur Erode. (638314)</p>
        </div>
       </div>
       <div className="phone">
       <h4><FaPhone size={20} style={{ color: "#fff" , marginRight: "2rem"}}/>
       9500873866</h4>
       </div>
       <div className="email">
       <h4><FaMailBulk size={20} style={{ color: "#fff" , marginRight: "2rem"}}/>
       Kishorkani4321@gmail.com</h4>
       </div>
       <div className="social">
       <FaLinkedin size={40} style={{ color: "#fff" , marginRight: "2rem"}}/>
       <FaGithub size={40} style={{ color: "#fff" , marginRight: "2rem"}}/>
       <FaTwitter size={40} style={{ color: "#fff" , marginRight: "2rem"}}/>
       <FaMailBulk size={40} style={{ color: "#fff" , marginRight: "2rem"}}/>
       </div>
      </div>
    </div>
  )
}

export default Footer;

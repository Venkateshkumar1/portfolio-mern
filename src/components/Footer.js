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
       <a href="https://www.linkedin.com/in/venkatesh-kumar-703a861a4/" target="_blank" rel="noreferrer"><FaLinkedin size={40} style={{ color: "#fff" , marginRight: "2rem"}}/></a>
       <a href="https://github.com/Venkateshkumar1" target="_blank" rel="noreferrer"><FaGithub size={40} style={{ color: "#fff" , marginRight: "2rem"}}/></a>
       <a href="https://twitter.com/home" target="_blank" rel="noreferrer"><FaTwitter size={40} style={{ color: "#fff" , marginRight: "2rem"}}/></a>
       <a href="https://mail.google.com/mail/u/0/#inbox" target="_blank" rel="noreferrer"><FaMailBulk size={40} style={{ color: "#fff" , marginRight: "2rem"}}/></a>
       </div>
      </div>
    </div>
  )
}

export default Footer;

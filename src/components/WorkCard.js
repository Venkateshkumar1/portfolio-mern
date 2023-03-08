import "./WorkCard.css";
import React from 'react';
import { NavLink } from "react-router-dom";

const WorkCard = (props) => {
  return (
        <div className="project-card">
          <img src={props.imgsrc} alt="img"/>
          <h2 className="project-title">{props.title}</h2>
          <div className="pro-details">
            <p>{props.text}</p>
          <div className="pro-btns">
           <NavLink to={props.frontend} className="btn">Front-End</NavLink>
           <NavLink to={props.backend} className="btn">Back-End</NavLink>
          </div>
          </div>      
        </div>
  )
}

export default WorkCard;

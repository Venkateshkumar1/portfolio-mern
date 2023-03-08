import "./SkillView.css";
import skills from "../assets/skills.jpg";
import React from 'react';
import LinearProgress from "@mui/material/LinearProgress";

const SkillView = () => {
  return (
    <div className="SkillContainer" id="skills">
    <div className="SkillContainer__image">
      <img src={skills} className="img" alt="img"/>
    </div>

    <div className='SkillContainer__text'>
        <h2>SKIILSET</h2>
        <div className='SkillContainer__skillset'>
        <h5>HTML5</h5>
        <div className='SkillContainer__slider SkillContainer__slider1'></div>
        <LinearProgress variant='determinate' value={90} />
        </div>
        <div className='SkillContainer__skillset'>
        <h5>CSS3</h5>
        <div className='SkillContainer__slider SkillContainer__slider2'></div>
        <LinearProgress variant='determinate' value={70} />
        </div>
        <div className='SkillContainer__skillset'>
        <h5>JavaScript</h5>
        <div className='SkillContainer__slider SkillContainer__slider3'></div>
        <LinearProgress variant='determinate' value={75} />
        </div>
        <div className='SkillContainer__skillset'>
        <h5>React</h5>
        <div className='SkillContainer__slider SkillContainer__slider4'></div>
        <LinearProgress variant='determinate' value={80} />
        </div>
        <div className='SkillContainer__skillset'>
        <h5>Node</h5>
        <div className='SkillContainer__slider SkillContainer__slider5'></div>
        <LinearProgress variant='determinate' value={60} />
        </div>
        <div className='SkillContainer__skillset'>
        <h5>MongoDb</h5>
        <div className='SkillContainer__slider SkillContainer__slider6'></div>
        <LinearProgress variant='determinate' value={70} />
        </div>

        </div>


    </div>
  )
}

export default SkillView;

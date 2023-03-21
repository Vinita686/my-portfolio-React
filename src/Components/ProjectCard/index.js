import "./style.css";

import React from 'react';
import { NavLink } from "react-router-dom";


function ProjectCard(props) {
  return (
    <div className="card-container">
      <div className="img-container">
        <img src={process.env.PUBLIC_URL +"/images/" + props.image} alt="screenshot"  />
      </div>
      <div className="description">
        <h2 className="project-title">{props.title}</h2>
        <p>{props.text}</p>
      </div>
      <div className="project-btn">
        <NavLink to={props.repo} target="_blank" className="btn">Repo</NavLink>
        <NavLink to={props.liveLink} target="_blank" className="btn">LiveLink </NavLink>
      </div>
    </div>
  );
}

export default ProjectCard;
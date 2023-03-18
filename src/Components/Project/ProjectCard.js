import "./ProjectCard.css";

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
        <NavLink to={props.repo} className="btn">Repo</NavLink>
        <NavLink to={props.liveLink} className="btn">LiveLink </NavLink>
      </div>
    </div>
  );
}

export default ProjectCard;
import "./ProjectCard.css";

import React from 'react';
import { Link } from "react-router-dom";


function ProjectCard(props) {
  return (
    <div className="card-container">
      <div className="img-container">
        <img alt="screenshot" src={process.env.PUBLIC_URL + "/images/" + props.image} />
      </div>
      <div className="description">
        <h2 className="project-title">{props.title}</h2>
        <p>{props.text}</p>
      </div>
      <div className="project-btn">
        <Link to={props.repo} className="btn">Repo</Link>
        <Link to={props.liveLink} className="btn">LiveLink</Link>
      </div>
    </div>
  );
}

export default ProjectCard;
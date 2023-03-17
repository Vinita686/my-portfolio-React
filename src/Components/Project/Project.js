import "./Project.css";

import React from 'react'
import data from "../projects.json";

function Project(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt="screenshot" src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Title:</strong> {props.name}
          </li>
          <li>
            <strong>Discription:</strong> {props.text}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Project;
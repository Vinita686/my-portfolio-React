import React, { useState } from 'react';
import ProjectCard from '../Project/ProjectCard';
import projectData from "../projects.json";



const Project = () => {
  console.log(projectData);
    const [projects] = useState(projectData);

  return (
    <div className='projects-container'>
        <h1 className='section-heading'>Project Gallery</h1>
        {projects.map (item => (
            <ProjectCard 
            id={item.id}
            key={item.id} 
            image={item.image} 
            title={item.title} 
            text={item.text} 
            repo={item.repo} 
            liveLink={item.liveLink} />
        )
    )}
    </div>
  );
}

export default Project;
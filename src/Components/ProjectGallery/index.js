
import ProjectCard from '../ProjectCard';
import Data from "../projectData.json";



const Project = () => {
  return (
    <>
    <h1 className='section-heading'>Project Gallery</h1>
    <div className='projects-container'>
        
        {Data.map (project => (
            <ProjectCard 
            id={project.id}
            key={project.id} 
            image={project.image} 
            title={project.title} 
            text={project.text} 
            repo={project.repo} 
            liveLink={project.liveLink} />
        )
    )}
    </div>
    </>
  );
}

export default Project;
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import HeroImg from "../Components/HeroImg/HeroImg";
import Project from "../Components/Project/ProjectCard";

function Projects() {
  return (
    <div >
    <Navbar />
    <HeroImg  heading="Projects." text="My recent projects." />
    <Project />
    <Footer />
    </div>
  );
}

export default Projects;

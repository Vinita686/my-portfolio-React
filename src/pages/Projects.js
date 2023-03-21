import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import HeroImg from "../Components/HeroImg";
import Project from "../Components/ProjectGallery";

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

import "./footer.css";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="social">
          <h4>Find out more about me at:</h4>
            <Link to="https://www.linkedin.com/in/yadav-vinita/" target={"_blank"}>
            <FaLinkedin
              size={30}
              style={{ color: "#fff", marginRight: "2rem" }}
            />
            </Link>
            <Link to="https://github.com/Vinita686" target="_blank">
            <FaGithub
              size={30}
              style={{ color: "#fff", marginRight: "2rem" }}
            />
            </Link>
          </div>
        </div>
      </div>
  
  );
}

export default Footer;

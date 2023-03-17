import "./Footer.js";
import { FaLinkedin, FaGithub } from "react-icons/fa";
function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">

          <h4>Find out more about me at:</h4>
          <div className="social">
            <FaLinkedin
              size={20}
              style={{ color: "#fff", marginRight: "2rem" }}
            />
            <FaGithub
              size={20}
              style={{ color: "#fff", marginRight: "2rem" }}
            />
          </div>
        </div>
      </div>
  
  );
}

export default Footer;

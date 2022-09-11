import "./button.css";
import Resume from "../props/Rahul_Resume.pdf";
// import {FcDownload} from "react-icons/fc";

function Buttons() {
  return (
    <div className="container btn-container">
      <a href={Resume} download className="btn pri dbutton">
      {/* <FcDownload className="dicon"/> */}
        Resume
      </a>
      <a href="#contact" className="btn sec">
        Get in Touch
      </a>
    </div>
  );
}

export default Buttons;

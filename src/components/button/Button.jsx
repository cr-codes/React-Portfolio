import "./button.css";
// import {FcDownload} from "react-icons/fc";

function Buttons() {
  return (
    <div className="container btn-container">
      <a href='../props/RESUME.pdf' download className="btn pri dbutton">
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

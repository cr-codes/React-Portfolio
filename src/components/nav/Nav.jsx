import "./nav.css";
import { AiOutlineHome } from "react-icons/ai";
// import { AiOutlineUser } from "react-icons/ai";
import { BiMessageRoundedDots } from "react-icons/bi";
import { BiCategory } from "react-icons/bi";
import { BiShareAlt } from "react-icons/bi";
import { BiCodeAlt } from "react-icons/bi";


function Navbar() {
  return (
    <div className="navigation">
      <a href="#home">
        <AiOutlineHome className="icon active-nav" />
      </a>
      <a href="#about">
        <BiCodeAlt className="icon" />
      </a>
      <a href="#projects">
        <BiCategory className="icon" />
      </a>
      <a href="#mail">
        <BiMessageRoundedDots className="icon" />
      </a>
      <a href="#footer">
        <BiShareAlt className="icon" />
      </a>
    </div>
  );
}

export default Navbar;

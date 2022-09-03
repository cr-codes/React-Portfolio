import "./contact.css";
import { AiOutlineLinkedin } from "react-icons/ai";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import emailjs from 'emailjs-com'
import { useRef } from "react";

function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_8yi57nl", "template_rg8t6kh", form.current, "QLmVLWHwuxXzZ9w0S")
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };

  return (
    <div id="contact" className="container contact-container">
      <h1>Contact Me</h1>
      <div className="contact-links">
     

        <a
          href="https://www.linkedin.com/in/coder-rahul/"
          className="contact linkedin"
          target={"blank"}
        >
          <AiOutlineLinkedin className="icon" />
          <h2>
            LinkedIn <span>Coder-Rahul</span>
          </h2>
        </a>

        <a
          href="https://api.whatsapp.com/send?phone=918805159425"
          className="contact whatsapp"
          target={"blank"}
        >
          <AiOutlineWhatsApp className="icon" />
          <h2>
            WhatsApp <span>+91 8805159425</span>
          </h2>
        </a>

        <a href="https://www.instagram.com/codes_rahul/" className="contact instagram" target={"blank"}>
          <AiOutlineInstagram className="icon" />
          <h2>
            Instagram <span>coder_rahul</span>
          </h2>
        </a>
     
      </div>
      <form className="container input-form" ref={form} onSubmit={sendEmail}>
                <div className='send-mail'><h5>Send me a message! </h5></div>
                <input type="text" name="name" placeholder='Enter your name' required />
                <input type="email" name="email" placeholder='Enter your email address' required />
                <textarea name="message" rows="5" placeholder='Hi, I think we need a design system for our products at Company X. How soon can you hop on to discuss this?'></textarea>
                <button type='submit' className='btn btn-primary'>Send Message</button>
          </form>
      </div>
  );
}

export default Contact;

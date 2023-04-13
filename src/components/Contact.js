import { ReactComponent as Linkedin } from "../images/linkedin.svg";
import { ReactComponent as Github } from "../images/github.svg";
import { ReactComponent as Email } from "../images/email.svg";

// hide-show contact on mobile(under 1000px)
function Contact() {
  return (
    <div className="icon-wrapper">
      <a href="mailto:yukoool@hotmail.com" tabIndex={0}>
        <Email className="icon" aria-label="email icon" />
      </a>
      <a href="https://www.linkedin.com/in/yuko-k-224247184/" tabIndex={0}>
        <Linkedin className="icon" aria-label="linkedin icon" />
      </a>
      <a href="https://github.com/Yuko-BCIT" tabIndex={0}>
        <Github className="icon" aria-label="github icon" />
      </a>
    </div>
  );
}

export default Contact;

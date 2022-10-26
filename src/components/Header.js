import Nav from "./Nav";
// SVGs can be imported as components
import { ReactComponent as Linkedin } from "../images/linkedin.svg";
import { ReactComponent as Github } from "../images/github.svg";
import { ReactComponent as Email } from "../images/email.svg";

const Header = () => {
  return (
    <header>
      <p className="author">Yuko Kitahata</p>

      <Nav />

      <div className="icon-wrapper">
        <a href="https://github.com/Yuko-BCIT">
          <Github className="icon" aria-label="github icon" />
        </a>
        <a href="https://www.linkedin.com/in/yuko-k-224247184/">
          <Linkedin className="icon" aria-label="linkedin icon" />
        </a>
        <a href="mailto:yukoool@hotmail.com">
          <Email className="icon" aria-label="email icon" />
        </a>
      </div>
    </header>
  );
};

export default Header;

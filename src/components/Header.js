import Nav from "./Nav";
import logo from "../images/logo.png";
// SVGs can be imported as components
import { ReactComponent as Linkedin } from "../images/linkedin.svg";
import { ReactComponent as Github } from "../images/github.svg";
import { ReactComponent as Email } from "../images/email.svg";
import Themes from "../utilities/themes";

function Header() {
  return (
    <header>
      <div className="author">
        <img className="mylogo" src={logo} alt="logo of Yuko Web Works" />
      </div>
      <Nav />
      {/* ボタンをコンポーネンツにして  themes.jsから呼ぶ */}
      <Themes />
      <div className="icon-wrapper">
        <a href="mailto:yukoool@hotmail.com">
          <Email className="icon" aria-label="email icon" />
        </a>
        <a href="https://www.linkedin.com/in/yuko-k-224247184/">
          <Linkedin className="icon" aria-label="linkedin icon" />
        </a>
        <a href="https://github.com/Yuko-BCIT">
          <Github className="icon" aria-label="github icon" />
        </a>
      </div>
    </header>
  );
}

export default Header;

import Nav from "./Nav";
import { NavLink } from "react-router-dom";
// SVGs can be imported as components
import { ReactComponent as Logo } from "../images/logo.svg"
import Themes from "../utilities/themes";

function Header() {
  return (
    <header>
      <NavLink to="/" end>
        <Logo className="author"/>
      </NavLink>
      <Nav /> 
      <Themes />
    </header>
  );
}

export default Header;

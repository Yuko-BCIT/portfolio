import { NavLink } from "react-router-dom";
import { ReactComponent as Home } from "../images/home.svg";
import { ReactComponent as About } from "../images/about.svg";
import { ReactComponent as Work } from "../images/work.svg";

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">
            <Home className="icon-nav" aria-label="home icon" />
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about">
            <About className="icon-nav" aria-label="about icon" />
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/work">
            <Work className="icon-nav" aria-label="work icon" />
            Work
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;

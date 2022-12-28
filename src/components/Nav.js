import { NavLink } from "react-router-dom";
import { ReactComponent as Home } from "../images/home.svg";
import { ReactComponent as About } from "../images/about.svg";
import { ReactComponent as Works } from "../images/works.svg";

function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/" end >
            <Home className="icon-nav" aria-label="home icon" />
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/works">
            <Works className="icon-nav" aria-label="works icon" />
            Works
          </NavLink>
        </li>
        <li>
          <NavLink to="/about">
            <About className="icon-nav" aria-label="about icon" />
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;

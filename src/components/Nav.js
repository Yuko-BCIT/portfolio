import { NavLink } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import { ReactComponent as Home } from "../images/home.svg";
import { ReactComponent as About } from "../images/about.svg";
import { ReactComponent as Works } from "../images/works.svg";
import { ReactComponent as At } from "../images/contact.svg";
import Contact from "./Contact";

function Nav() {
  // set open & close Contact on mobile screen
  const [show, setShow] = useState(false);

  // if user resize screen, remove onclick
  const resizeEvent = useCallback(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth < 1000) {
        setShow(false);
      } else {
        setShow(true);
      }
    });
  }, []);

  // on large screen more than 1000px, always show Contact
  useEffect(() => {
    if (window.innerWidth >= 1000) {
      setShow(true);
    }
    resizeEvent();
    return () => window.removeEventListener("resize", resizeEvent);
  }, [resizeEvent]);

  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to="/" end tabIndex={0}>
              <Home className="icon-nav" aria-label="home icon" />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/works" tabIndex={0}>
              <Works className="icon-nav" aria-label="works icon" />
              Works
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" tabIndex={0}>
              <About className="icon-nav" aria-label="about icon" />
              About
            </NavLink>
          </li>

          {/* add classname and setShow() */}
          <li className="on-off-links">
            <button 
            className={`
           ${show ? "open" : ""}`}
            onClick ={() => setShow(!show)}
          >
            <At className="icon-nav" aria-label="contact icon" />
            Contact
          </button></li>
        </ul>
      </nav>
      {/* show pop-up links on click */}
      {show && <Contact/>}
    </>
  );
}

export default Nav;

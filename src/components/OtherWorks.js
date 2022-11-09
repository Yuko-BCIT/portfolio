import { NavLink } from "react-router-dom";

// in-app links to other works pages
function OtherWorks() {

  return (
    <>
      <h3 className="see-other">See other works</h3>

      <nav className="other-works">
        <ul>
          <NavLink to="/works/capstone">Capstone Project</NavLink>
          <NavLink to="/works/portfolio">Portfolio</NavLink>
          <NavLink to="/works/movie">Movie Database</NavLink>
          <NavLink to="/works/game">JavaScript Game</NavLink>
        </ul>
      </nav>
    </>
  );
}

export default OtherWorks;

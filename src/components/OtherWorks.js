import { NavLink } from "react-router-dom";

// in-app links to other works pages
function OtherWorks() {
  return (
    <>
      <h3 className="see-other">Click to see other works</h3>
      {/* by setting NavLinks, page you're on doesn't show by editig .active */}
      <nav className="other-works">
        <NavLink to="/works/portfolio">Portfolio</NavLink>
        <NavLink to="/works/capstone">Capstone</NavLink>
        <NavLink to="/works/movie">Movie</NavLink>
        <NavLink to="/works/game">Game</NavLink>
      </nav>
    </>
  );
}

export default OtherWorks;

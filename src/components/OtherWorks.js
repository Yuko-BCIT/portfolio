import { NavLink } from "react-router-dom";

// in-app links to other works pages
function OtherWorks() {
  return (
    <>
      <h3 className="see-other">Click to see other featured works</h3>
      {/* by setting NavLinks, page you're on doesn't show by editig .active */}
      <nav className="other-works">
        <NavLink to="/works/movie" tabIndex={0}>Movie</NavLink>
        <NavLink to="/works/capstone" tabIndex={0}>Capstone</NavLink>
        <NavLink to="/works/portfolio" tabIndex={0}>Portfolio</NavLink>
        <NavLink to="/works/game" tabIndex={0}>Game</NavLink>
      </nav>
    </>
  );
}

export default OtherWorks;

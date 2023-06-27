import { NavLink } from "react-router-dom";
import { ReactComponent as Donut } from "../images/donut.svg";
const PageNotFound = () => {
  return (
    <main className="notfound">
      <h1>Page Not Found</h1>
      <h2>
        4<Donut />4
      </h2>
      <NavLink to="/" tabIndex={0}>
        Go Back
      </NavLink>
    </main>
  );
};

export default PageNotFound;

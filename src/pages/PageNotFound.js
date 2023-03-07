import { NavLink } from "react-router-dom";
import { ReactComponent as Home } from "../images/home.svg";

const PageNotFound = () => {
  return (
    <main className="notfound">
      <h1>
        404<br />
        Page Not Found
      </h1>
      <section>
        <h2>
          <NavLink to="/">
            Home
            <Home />
          </NavLink>
        </h2>
      </section>
    </main>
  );
};

export default PageNotFound;

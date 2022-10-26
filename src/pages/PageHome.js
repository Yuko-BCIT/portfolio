import laptop from "../images/laptop.jpg";
import { NavLink } from "react-router-dom";

function PageHome() {
  return (
    <main className="home">
      <section>
        <article className="introduction">
          <h1>Hi, I'm Yuko, a front end web developer.</h1>
        </article>

        <figure>
          <img
            className="home-image"
            src={laptop}
            alt="laptop and glasses on a desk"
            />
          <NavLink to="/work">
            <p className="button button-seemywork">See my work</p>
          </NavLink>
        </figure>

      </section>
    </main>
  );
}

export default PageHome;

import { NavLink } from "react-router-dom";
import laptop from "../images/laptop.jpg";
import lotus from "../images/lotus.jpg";
import fish from "../images/fish.jpg";

function PageHome() {
  return (
    <main className="home">
      <h1>Yuko Kitahata Web Developer</h1>

      <section>
        <figure>
          <img
            className="home-image"
            src={ laptop }
            alt="laptop and glasses on a desk"
          />
        </figure>

        {/* <figure className="round-image">
          <img src={ lotus } alt="" />
        </figure>
        <figure className="round-image">
          <img src={ fish } alt="" />
        </figure> */}

        <NavLink to="/work">
          <p className="button button-seemywork">See my work</p>
        </NavLink>
      </section>
    </main>
  );
}

export default PageHome;

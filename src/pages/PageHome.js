import { NavLink } from "react-router-dom";
import laptop from "../images/laptop.jpg";
import lotus from "../images/lotus.jpg";
import fish from "../images/fish.jpg";

function PageHome() {
  return (
    <main className="home">

      <section className="image-container">
      <h1>Yuko Kitahata Web Developer</h1>
        <figure>
          <img
            className="home-image"
            src={ laptop }
            alt="laptop and glasses on a desk"
          />
        </figure>

        <NavLink to="/work">
        <figure className="round-image lotus">
          <img src={ lotus } alt="lotus" />
          <figcaption>See my work</figcaption>
        </figure>
        </NavLink>
        {/* <figure className="round-image koi">
          <img src={ fish } alt="koi fish" />
        </figure> */}
      </section>
    </main>
  );
}

export default PageHome;

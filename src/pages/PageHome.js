import { NavLink } from "react-router-dom";
import laptop from "../images/laptop.jpg";
import lotus from "../images/lotus.jpg";

function PageHome() {
  return (
    <main className="home">
      <section className="image-container">
        <h1>
          Yuko Kitahata
          <br />
          A Web Developer
        </h1>
        <p>I enjoy working with React, CSS and design!</p>

        <figure>
          <img
            className="home-image"
            src={ laptop }
            alt="laptop and glasses on a desk"
          />
        </figure>

        <NavLink to="/works">
          <figure className="round-image lotus">
            <img src={ lotus } alt="lotus illustration" />
            <figcaption>See My Works</figcaption>
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

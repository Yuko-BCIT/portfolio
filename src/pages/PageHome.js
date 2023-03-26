import { Link } from "react-router-dom";
import Logo from "../components/logo";
import hero from "../images/hero.jpg";
import Letters from "../components/Letters";
import Bubbles from "../components/Bubbles";
import Skills from "../components/Skills";
import ScrollButton from "../components/ScrollButton";
import DownArrow from "../components/DownArrow";

function PageHome() {
  return (
    <main className="home">
      <Logo />
      <ScrollButton />

      <section className="above-fold">
        <Bubbles />

        <article>
          <h1>
            <Letters />
          </h1>
          <h2>Bring ideas to life with code</h2>
          <DownArrow />
        </article>
      </section>

      <section className="home-works">
        <figure>
          <img src={hero} alt="collection of works" />
          <Link to="/works">
            <figcaption>View all works</figcaption>
          </Link>
        </figure>
      </section>

      <section className="home-skills">
        <h2>Tech Skills</h2>

        <article>
          <Skills />
        </article>
        <p>
          The technologies I enjoy working with are React, JavaScript, API, CSS,
          WordPress and I'm keen on learning new ones. Click the &#127922; and
          see my works!
        </p>
      </section>

      <section className="home-about">
        <h2>About</h2>
        <p>
          With a strong background in customer service, I gained hands-on
          experience at BCIT and became a web developer. I am passionate about
          creating user-friendly, functional, and eye-catching websites and
          apps.
        </p>
        <Link to="/about">
          <p className="button-about">Learn more</p>
        </Link>
      </section>
    </main>
  );
}

export default PageHome;

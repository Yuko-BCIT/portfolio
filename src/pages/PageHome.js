import { Link } from "react-router-dom";
import heroS from "../images/keyboard-s.jpg";
import heroM from "../images/keyboard-m.jpg";
import hero from "../images/keyboard.jpg";
import aboutS from "../images/mountains-s.jpg";
import aboutM from "../images/mountains-m.jpg";
import about from "../images/mountains.jpg";
import Letters from "../components/Letters";
import Bubbles from "../components/Bubbles";
import Skills from "../components/Skills";
import DownArrow from "../components/DownArrow";

function PageHome() {
  return (
    <main className="home">
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
          <img
            srcSet={`${heroS} 1000w, ${heroM} 1500w, ${hero} 2000w`}
            src={hero}
            alt="computer keyboard and cell phone on a desk"
          />
          <Link to="/works" tabIndex={0}>
            View all works
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
        <figure>
          <img
            srcSet={`${aboutS} 1000w, ${aboutM} 1500w, ${about} 2000w`}
            src={about}
            alt="beautiful mountains and lake"
          />
        </figure>
        <div>
          <h2>About</h2>
          <p>
            I am a web developer based in Vancouver. With attention to detail
            and creativity, I'm passionate about creating user-friendly,
            functional, and eye-catching websites and apps. When I'm not coding,
            I enjoy exploring nature and checking out local eateries.
          </p>
          <Link to="/about" tabIndex={0}>
            <p className="button-about">Learn more</p>
          </Link>
        </div>
      </section>
    </main>
  );
}

export default PageHome;

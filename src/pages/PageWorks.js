import { Link } from "react-router-dom";
import capstone from "../images/capstone.jpeg";
import portfolio from "../images/portfolio.png";
import movie from "../images/movie.png";
import highlow from "../images/highlow.png";

function PageWorks() {

  return (
    <main className="work">
      <h1>Works</h1>
      <h2>Click the images to see the details</h2>
      <section className="work-links">
        <figure>
          <Link to="/works/capstone">
            <img src={ capstone } alt="screen shot of a bakery website" />
          </Link>
          <figcaption>Capstone Project - Tweelling Bakery</figcaption>
        </figure>

        <figure>
          <Link to="/works/portfolio">
            <img src={ portfolio } alt="screen shot of a portfolio website" />
          </Link>
          <figcaption>Portfolio - Yuko Web Works</figcaption>
        </figure>

        <figure>
          <Link to="/works/movie">
            <img src={ movie } alt="screen shot of a movie database website" />
          </Link>
          <figcaption>React App - Preview</figcaption>
        </figure>

        <figure>
          <Link to="/works/game">
            <img src={ highlow } alt="screen shot of a game website" />
          </Link>
          <figcaption>JavaScript Game - High Low</figcaption>
        </figure>

      </section>

      <section>
        <h2>Upcoming Projects</h2>
        <p>
          I'm working on a senior daycare center website based in Tokyo. Check it out here in early 2023!
        </p>
      </section>
    </main>
  );
}

export default PageWorks;

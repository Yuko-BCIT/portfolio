import Helmet from "react-helmet";
import { Link } from "react-router-dom";
import capstone from "../images/capstone.jpg";
import portfolio from "../images/portfolio.jpg";
import movie from "../images/movie.jpg";
import highlow from "../images/highlow.jpg";

function PageWorks() {
  return (
    <main className="work">
      <Helmet>
        <title>Works</title>
        <meta
          name="description"
          content="Take a look at my works and see details on the procedures and links to live sites and GitHub repositories."
        />
      </Helmet>
      <h1>Works</h1>
      <h2>Click the images to see details</h2>

      <section className="work-links">
        <figure>
          <Link to="/works/capstone">
            <img src={capstone} alt="screen shot of a bakery website" />
          </Link>
          <figcaption>
            Capstone Project - Tweelling Bakery
            <br />
            Nov 2022
          </figcaption>
        </figure>

        <figure>
          <Link to="/works/portfolio">
            <img src={portfolio} alt="screen shot of a portfolio website" />
          </Link>
          <figcaption>
            Portfolio - Yuko Web Works
            <br />
            Nov 2022
          </figcaption>
        </figure>

        <figure>
          <Link to="/works/movie">
            <img src={movie} alt="screen shot of a movie database website" />
          </Link>
          <figcaption>
            React Movie App - Preview
            <br />
            Sept 2022
          </figcaption>
        </figure>

        <figure>
          <Link to="/works/game">
            <img src={highlow} alt="screen shot of a game website" />
          </Link>
          <figcaption>
            JavaScript Game - High Low
            <br />
            July 2022
          </figcaption>
        </figure>
      </section>

      <section>
        <h2>Upcoming Projects</h2>
        <p>
          I'm working on a senior daycare website based in Tokyo. Check it out
          here in early 2023!
        </p>
      </section>
    </main>
  );
}

export default PageWorks;

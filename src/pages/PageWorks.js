import Helmet from "react-helmet";
import Logo from "../utilities/logo"
import { Link } from "react-router-dom";
import capstone from "../images/capstone.jpg";
import portfolio from "../images/portfolio.jpg";
import movie from "../images/movie.jpg";
import highlow from "../images/highlow.jpg";
import kitahata from "../images/kitahata.jpg";

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
      <Logo />
      <h1>Works</h1>
      <h2>Click the images to see details</h2>

      <section className="work-links">
        <figure>
          <Link to="/works/capstone">
            <img src={capstone} alt="screen shot of a bakery website" />
          </Link>
          <figcaption>
            Capstone Project - Tweeling Bakery
            <br />
            Nov 2022
          </figcaption>
        </figure>

        <figure className="portfolio">
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

        <figure>
          <Link to="/works/welding">
            <img src={kitahata} alt="screen shot of a welding website" />
          </Link>
          <figcaption>
            Corporate Website - Welding Company
            <br />
            March 2022
          </figcaption>
        </figure>
      </section>

    </main>
  );
}

export default PageWorks;

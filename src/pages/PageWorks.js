import Helmet from "react-helmet";
import Logo from "../components/logo";
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
      <Logo />
      <h1>Works</h1>
      <h2>Click the images to see details</h2>

      <section className="work-links">
        <Link to="/works/portfolio">
          <figure className="portfolio">
            <img src={portfolio} alt="screen shot of a portfolio website" />
            <figcaption>
              Portfolio
              <br />
              Yuko Web Works
            </figcaption>
          </figure>
        </Link>

        <Link to="/works/capstone">
          <figure>
            <img src={capstone} alt="screen shot of a bakery website" />
            <figcaption>
              Capstone Project
              <br />
              Tweeling Bakery
            </figcaption>
          </figure>
        </Link>

        <Link to="/works/movie">
          <figure>
            <img src={movie} alt="screen shot of a movie database website" />
            <figcaption>
              React Movie App
              <br />
              Preview
            </figcaption>
          </figure>
        </Link>

        <Link to="/works/game">
          <figure>
            <img src={highlow} alt="screen shot of a game website" />
            <figcaption>
              JavaScript Game
              <br />
              High Low
            </figcaption>
          </figure>
        </Link>
      </section>
    </main>
  );
}

export default PageWorks;

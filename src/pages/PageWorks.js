import Helmet from "react-helmet";
import { Link } from "react-router-dom";
import capstone from "../images/tweeling.jpg";
import portfolio from "../images/portfolio.jpg";
import movie from "../images/movie.jpg";
import bali from "../images/bali.jpg";
import woo from "../images/woo.jpg";
import highlow from "../images/highlow.jpg";

function PageWorks() {
  return (
    <main className="work">
      <Helmet>
        <title>Works</title>
        <meta
          name="description"
          content="Click the images to see the project details such as videos, overviews, 
          development process, takeaways, and links to live sites and GitHub repositories."
        />
      </Helmet>
      <h1>Works</h1>
      <h2>Featured Projects</h2>
      <p>Click and see the project details and development process</p>

      <section className="work-links">
        <Link to="/works/portfolio" tabIndex={0}>
          <figure>
            <img className="portfolio"
            src={portfolio} alt="screen shot of a portfolio website" />
            <figcaption>
              Web Portfolio
              <br />
              Yuko Web Works
            </figcaption>
          </figure>
        </Link>

        <Link to="/works/movie" tabIndex={0}>
          <figure>
            <img src={movie} alt="screen shot of a movie database website" />
            <figcaption>
              React Movie App
              <br />
              Preview
            </figcaption>
          </figure>
        </Link>

        <Link to="/works/capstone" tabIndex={0}>
          <figure>
            <img src={capstone} alt="screen shot of a bakery website" />
            <figcaption>
              Capstone Project
              <br />
              Tweeling Bakery
            </figcaption>
          </figure>
        </Link>

        <Link to="/works/game" tabIndex={0}>
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

      <h2>More projects</h2>
      <p>Click and see the live sites</p>
      <section className="work-links more-projects">
        <a href="https://yukowebworks.com/woostore" tabIndex={0}>
          <figure>
            <img src={woo} alt="screen shot of e-commerce website" />
            <figcaption>
              Online Store
              <br />
              WooStore
            </figcaption>
          </figure>
        </a>

        <a href="https://yukowebworks.com/bali" tabIndex={0}>
          <figure>
            <img src={bali} alt="screen shot of Bali website" />
            <figcaption>
              Favorite City
              <br />
              Bali
            </figcaption>
          </figure>
        </a>
      </section>
    </main>
  );
}

export default PageWorks;

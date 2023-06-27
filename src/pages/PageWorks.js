import Helmet from "react-helmet";
import { Link } from "react-router-dom";
import clockS from "../images/clock-s.jpg";
import clock from "../images/clock.jpg";
import portfolioS from "../images/portfolio-s.jpg";
import portfolio from "../images/portfolio.jpg";
import movieS from "../images/movie-s.jpg";
import movie from "../images/movie.jpg";
import capstoneS from "../images/tweeling-s.jpg";
import capstone from "../images/tweeling.jpg";
import highlowS from "../images/highlow-s.jpg";
import highlow from "../images/highlow.jpg";
import wooS from "../images/woo-s.jpg";
import woo from "../images/woo.jpg";
import baliS from "../images/bali-s.jpg";
import bali from "../images/bali.jpg";

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
        <Link to="/works/worldclock" tabIndex={0}>
          <figure>
            <img
              srcSet={`${clockS} 1000w, ${clock} 1400w`}
              src={clock}
              alt="screen shot of a world clock website"
            />
            <figcaption>
              API Application
              <br />
              World Clock
            </figcaption>
          </figure>
        </Link>
        <Link to="/works/portfolio" tabIndex={0}>
          <figure>
            <img
              className="portfolio"
              srcSet={`${portfolioS} 1000w, ${portfolio} 1400w`}
              src={portfolio}
              alt="screen shot of a portfolio website"
            />
            <figcaption>
              Web Portfolio
              <br />
              Yuko Web Works
            </figcaption>
          </figure>
        </Link>

        <Link to="/works/movie" tabIndex={0}>
          <figure>
            <img
              srcSet={`${movieS} 1000w, ${movie} 1400w`}
              src={movie}
              alt="screen shot of a movie database website"
            />
            <figcaption>
              React Movie App
              <br />
              Preview
            </figcaption>
          </figure>
        </Link>

        <Link to="/works/capstone" tabIndex={0}>
          <figure>
            <img
              srcSet={`${capstoneS} 1000w, ${capstone} 1400w`}
              src={capstone}
              alt="screen shot of a bakery website"
            />
            <figcaption>
              Capstone Project
              <br />
              Tweeling Bakery
            </figcaption>
          </figure>
        </Link>

        <Link to="/works/game" tabIndex={0}>
          <figure>
            <img
              srcSet={`${highlowS} 1000w, ${highlow} 1400w`}
              src={highlow}
              alt="screen shot of a game website"
            />
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
            <img
              srcSet={`${wooS} 1000w, ${woo} 1400w`}
              src={woo}
              alt="screen shot of e-commerce website"
            />
            <figcaption>
              Online Store
              <br />
              WooStore
            </figcaption>
          </figure>
        </a>

        <a href="https://yukowebworks.com/bali" tabIndex={0}>
          <figure>
            <img
              srcSet={`${baliS} 1000w, ${bali} 1400w`}
              src={bali}
              alt="screen shot of Bali website"
            />
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

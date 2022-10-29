import { Link } from "react-router-dom";
import capstone from "../images/capstone.jpeg";
import portfolio from "../images/portfolio.png";
import movie from "../images/movie.png";
import highlow from "../images/highlow.jpeg";
import shopify from "../images/shopify.png";

function PageWork() {

  return (
    <main className="work">
      <h1>Work</h1>
      <h2>Click the images to see the details</h2>
      <p>I equally enjoy working on React, CSS and design!</p>
      <section className="work-links">
        <figure>
          <Link to="/work/capstone">
            <img src={ capstone } alt="screen shot of a bakery website" />
          </Link>
          <figcaption>Capstone Project - Twilling Bakery</figcaption>
        </figure>

        <figure>
          <Link to="/work/portfolio">
            <img src={ portfolio } alt="screen shot of a portfolio website" />
          </Link>
          <figcaption>Portfolio - Yuko Web Works</figcaption>
        </figure>

        <figure>
          <Link to="/work/movie">
            <img src={ movie } alt="screen shot of a movie database website" />
          </Link>
          <figcaption>React App - Preview</figcaption>
        </figure>

        <figure>
          <Link to="/work/game">
            <img src={ highlow } alt="screen shot of a game website" />
          </Link>
          <figcaption>JavaScript Game - High Low</figcaption>
        </figure>

        <figure>
          <Link to="/work/shopify">
            <img src={ shopify } alt="screen shot of a shopify website" />
          </Link>
          <figcaption>Shopify - Cafe JavaScript</figcaption>
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

export default PageWork;

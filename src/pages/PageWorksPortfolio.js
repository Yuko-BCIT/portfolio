import Helmet from "react-helmet";
import Logo from "../components/logo";
import portfolio from "../images/portfolio.jpg";
import OtherWorks from "../components/OtherWorks";
import ScrollButton from "../components/ScrollButton";
import { ReactComponent as React } from "../images/react.svg";
import { ReactComponent as Js } from "../images/js.svg";
import { ReactComponent as Sass } from "../images/sass.svg";
import { ReactComponent as Xd } from "../images/xd.svg";
import FadeInAnimation from "../utilities/fadeInAnimation";

function PageWorkPortfolio() {
  return (
    <main className="work-details">
      <Helmet>
        <title>Portfolio</title>
        <meta
          name="description"
          content="This is my portfolio showcasing my projects and a little bit about
            myself. I used React because components reduce code repetition, it
            supports a variety of great libraries, and I wanted to improve my
            React skills."
        />
      </Helmet>
      <FadeInAnimation />
      <ScrollButton />
      <Logo />
      <h1>Portfolio</h1>

      <section>
        <h2>Yuko Web Works</h2>
        <figure>
          <img
            className="portfolio"
            src={portfolio}
            alt="screen shot of a portfolio website"
          />
        </figure>

        <div className="tools">
          <h3>Tech Stack</h3>
          <div>
            <React className="icon-tool" />
            <Js className="icon-tool" />
            <Sass className="icon-tool" />
            <Xd className="icon-tool" />
          </div>
        </div>
      </section>

      <section className="project">
        <article>
          <h3>Overview</h3>
          <p>
            This is my portfolio showcasing my projects and a little bit about
            myself. I used React because components reduce code repetition, it
            supports a variety of great libraries, and I wanted to improve my
            React skills.
          </p>
        </article>

        <article>
          <h3>Development</h3>
          <p>
            The main feature of this application is the light/dark mode toggled
            by a user, since I enjoy using this feature on other websites for
            browsing at night time. I triggered onClick event to add a className
            to change styling with useEffect.
          </p>
          <p>
            Using various components, I created a fade-in animation for the text
            and a "back to top" button that appears when scrolling to a certain
            point. Importing these components into the target pages made it easy
            to reuse the functions.
          </p>
          <p>
            For SEO purposes, I also imported react-helmet on each page and
            added title and metadata to increase search hits.
          </p>
        </article>

        <article>
          <h3>Takeaways</h3>
          <p>
            Learning from the movie database experience, I approached the
            styling in a mobile-first manner. As a result, it took less time to
            make the app responsive. And I challanged implementing bottom/side
            navigation for the first time and I struggled a bit to structure
            pages, but it was a great learning experience.
          </p>
          <p>
            My classmates and I shared each others portfolios and I got to see
            the cool features they were using, which was very inspiring and
            taught me the importance of learning from each other.
          </p>
          <p>
            Time management was extremely difficult since I had to work on our
            final group project simultaneously, so I need to work on this skill.
            When adding new features, I go through extensive research to make it
            work and my coding skills are improving, so I would like to keep my
            portfolio evolving and learn from it.
          </p>
        </article>

        <nav className="external-links">
          <a
            className="button"
            href="https://github.com/Yuko-BCIT/portfolio"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </nav>
        <article>
          <OtherWorks />
        </article>
      </section>
    </main>
  );
}

export default PageWorkPortfolio;

import Helmet from "react-helmet";
import portfolio from "../images/portfolio.jpg";
import folioxd from "../images/folioxd.jpg";
import codefolio from "../images/codefolio.jpg";
import { ReactComponent as React } from "../images/react.svg";
import { ReactComponent as Js } from "../images/js.svg";
import { ReactComponent as Css } from "../images/css.svg";
import { ReactComponent as Xd } from "../images/xd.svg";
import OtherWorks from "../components/OtherWorks";

function PageWorkPortfolio() {
  return (
    <main className="work-details">
      <Helmet>
        <title>Portfolio</title>
      </Helmet>
      <h1>Portfolio</h1>

      <section>
        <h2>Yuko Web Works</h2>
        <figure className="portfolio-hero">
          <img src={portfolio} alt="screen shot of a portfolio website" />
        </figure>

        <div className="tools">
          <h3>Tools</h3>
          <div>
            <React className="icon-tool" />
            <Js className="icon-tool" />
            <Css className="icon-tool" />
            <Xd className="icon-tool" />
          </div>
        </div>
      </section>

      <section className="project">
        <h2>The project</h2>

        <article>
          <h3>Overview</h3>
          <p>
            Ths is my portfolio website using React app showcasing my works,
            links to livesite and GitHub repositories, and a little bit about
            myself. A dark and light mode is implemented, allowing users to
            switch between background and font colors. I chose React because it
            allows me to divide structures into components, avoiding repetition
            of the same code, it supports a variety of great libraries which
            make it fun to use React.
          </p>
        </article>

        <article>
          <h3>Design</h3>
          <p>
            Made a style guide to determine fonts, colors, and a rough design,
            documented the content plan, created a wireframe in Adobe XD based
            on that plan, and rearranged the site structure based on user
            experience (bottom navigation for mobile, switchable to dark mode
            for energy saving.)
          </p>

          <figure className="wireframe">
            <img src={folioxd} alt="wireframe of a portfolio website" />
          </figure>
        </article>

        {/* <nav className="external-links">
          <a className="button" href="">
            XD wireframe
          </a>
          <a className="button" href="">
            XD prototype
          </a>
        </nav> */}

        <article>
          <h3>Development</h3>
          <p>
            Using Create React App, I divided the structure into components,
            first styling the header, footer, and main layout in the order
            mobile, tablet then desktop, and finished styling to some extent.
            After that I wrote contents, added photos, icons and after those
            were completed, I added dark mode. Finally I added supportive
            screenshots and videos to the projects and made touch-ups to the
            rest of the detailed styling.
          </p>

          <figure className="wireframe">
            <img src={codefolio} alt="screenshot of code editor" />
          </figure>
        </article>

        <article>
          <h3>Takeaways</h3>
          <p>
            Based on the previous experience, the styling was done in a
            mobile-first manner, which made it smooth and efficient. However,
            most of the styling was done before the content, which took some
            time, and the content was put on the back burner. Also, I tried to
            add various features before writing the content, but ended up not
            using them which delayed the development. As I learned in the
            project management class, when time is limited, "nice-to-have
            features" should come last and do what matters most in the early
            stages of the project. In the next project, I would like to proceed
            in the following order: content, styling, and nice-to-have features.
          </p>
        </article>

        <nav className="external-links">
          <a
            className="button single-work-button github"
            href="https://github.com/Yuko-BCIT/portfolio"
          >
            GitHub
          </a>
        </nav>

        <OtherWorks />
      </section>
    </main>
  );
}

export default PageWorkPortfolio;

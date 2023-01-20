import Helmet from "react-helmet";
import Logo from "../utilities/logo";
import kitahata from "../images/kitahata.jpg";
import OtherWorks from "../components/OtherWorks";
import { ReactComponent as Html } from "../images/html.svg";
import { ReactComponent as CSS } from "../images/css.svg";

function PageWorksWelding() {
  return (
    <main className="work-details">
      <Helmet>
        <title>Corporate Website</title>
      </Helmet>
      <Logo />
      <h1>Corporate Website</h1>

      <section>
        <h2>Welding Company</h2>
        <figure>
          <img src={kitahata} alt="screen shot of a welding company website" />
        </figure>

        <div className="tools">
          <h3>Tools</h3>
          <div>
            <Html className="icon-tool" />
            <CSS className="icon-tool" />
          </div>
        </div>
      </section>

      <section className="project">
        <h2>The Project</h2>

        <article>
          <h3>Story</h3>

          <p>
            I always wanted to make a website for my father's welding company,
            since they do great work but not many people are aware of his
            business. When I asked my brother, a programmer, to build a website
            for him, he told me that he specializes in back-end, not front-end.
            I didn't even understand what that meant. But I decided, if no one
            else will do it, I will. And once I started studying online, I got
            hooked on the fun of building a website from scratch, and that's how
            my journey began.
          </p>
        </article>

        <nav className="external-links">
          <a
            className="button single-work-button livesite"
            href="https://kitahatakaihatsu.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Site
          </a>
        </nav>

        <OtherWorks />
      </section>
    </main>
  );
}

export default PageWorksWelding;

import Helmet from "react-helmet";
import Logo from "../utilities/logo"
import movie from "../images/movie.jpg";
import moviexd from "../images/moviexd.jpg";
import previewVideo from "../media/preview.mp4";
import { ReactComponent as React } from "../images/react.svg";
import { ReactComponent as Js } from "../images/js.svg";
import { ReactComponent as Redux } from "../images/redux.svg";
import { ReactComponent as CSS } from "../images/css.svg";
import OtherWorks from "../components/OtherWorks";

function PageWorkMovie() {
  return (
    <main className="work-details">
      <Helmet>
        <title>React Movie App</title>
      </Helmet>
      <Logo />
      <h1>React Movie App</h1>

      <section>
        <h2>Preview - the Movie Database</h2>

        <figure>
          <img src={movie} alt="screen shot of a movie database website" />
        </figure>

        <div className="tools">
          <h3>Tools</h3>

          {/* icons */}
          <div>
            <React className="icon-tool" />
            <Redux className="icon-tool" />
            <Js className="icon-tool" />
            <CSS className="icon-tool" />
          </div>
        </div>
      </section>

      <section className="project">
        <h2>The project</h2>

        <article>
          <h3>Overview</h3>
          <figure>
            <video preload="auto" autoPlay muted playsInline controls>
              <source src={previewVideo} type="video/mp4" />
              Preview Video
            </video>
          </figure>
          <p>
            Preview is a React application that pulls in movie information via
            API and allows users to sort movies, add them to favorites, view
            details, and find movies they want to watch. I also added a
            simulated email subscription page without sending or storing user
            information.
          </p>
        </article>

        <article>
          <h3>Design</h3>
          <p>
            First I created a wireframe using Adobe XD to come up with the
            structure and page layout for the site. Then I converted it to an
            high fidelity mockup adding movie posters, colors, and contents, and
            once I had an idea of the finished site, I made the navigations and
            buttons interactive so that a fictional client can click and jump to
            pages.
          </p>

          <figure className="wireframe">
            <img
              src={moviexd}
              alt="wireframe of a movie database website with color"
            />
          </figure>
        </article>

        <article>
          <h3>Development</h3>
          <p>
            Using Create React App, I first created header, footer, and pages
            components. Then pulled movie information via API to display
            posters, summaries, ratings, etc. React Router was used to speed up
            page loading, then I created functions to add movies to favorites,
            and implemented Redux so that the information is stored on
            client-side until the cookie is deleted. While styling with Sass, I
            rearranged the design, but I like the final version better.
          </p>
        </article>

        <article>
          <h3>Takeaways</h3>
          <p>
            This was my first app using React, and after hearing from previous
            intakes that some students worked in groups ended up not working on
            React at all, I took on the challenge solo so I had no choice but
            doing everything with my responsibility.
          </p>

          <p>
            The home component have become content heavy and the code has become
            very long, but I left it because the site broke down when I broke it
            up into smaller components. I will fix it when I gain more
            knowledge. Since I started building the site from the desktop
            version, when I shrunk the screen, the content overflowed the
            container, and I had a hard time fixing it. I realized the weight of
            the term "mobile first" and decided to use the experience and
            develop mobile first on the next project.
          </p>

          <p>
            Even though I was overwhelmed by the fact that it was quite
            different from JavaScript, but with the help of my instructors and
            classmates, I was able to create a work that I was proud of and I
            was able to deepen my understanding of React.
          </p>
        </article>

        <nav className="external-links">
          <a
            className="button single-work-button livesite"
            href="https://yukowebworks.com/movie-database"
          >
            Live Site
          </a>
          <a
            className="button single-work-button github"
            href="https://github.com/Yuko-BCIT/React-MovieDatabase-app"
          >
            GitHub
          </a>
        </nav>

        <OtherWorks />
      </section>
    </main>
  );
}

export default PageWorkMovie;

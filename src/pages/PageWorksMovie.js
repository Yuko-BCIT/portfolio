import movie from "../images/movie.png";
import { ReactComponent as React } from "../images/react.svg";
import { ReactComponent as Xd } from "../images/xd.svg";
import { ReactComponent as Redux } from "../images/redux.svg";

function PageWorkMovie() {
  return (
    <main className="work-details">
      <h1>React App</h1>

      <section>
        <h2>Preview - the Movie Database</h2>

        <figure>
          <img src={movie} alt="screen shot of a movie database website" />
        </figure>

        <div className="tools">
          <h3>Main tools</h3>

          {/* icons */}
          <div>
            <React className="icon-tool" />
            <Xd className="icon-tool" />
            <Redux className="icon-tool" />
          </div>
        </div>
      </section>

      <section className="project">
        <h2>The project</h2>

        <article>
          <h3>Overview</h3>
          <p>
            Preview is a React application that pulls in movie information via
            API and allows users to sort movies, add them to favorites, view
            details, and find movies they want to watch.
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
        </article>

        {/* use nav for group of links */}
        <nav className="external-links">
          <a
            className="button"
            href="https://xd.adobe.com/view/8bcd39d0-15d3-445d-9493-72215eb1d95b-de9e/"
          >
            XD wireframe
          </a>
          <a
            className="button"
            href="https://xd.adobe.com/view/6b7a9b19-7cbc-433d-b27b-1c58bfb77296-3e29/"
          >
            XD prototype
          </a>
        </nav>

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
            This was my first app using React, and fter hearing from previous
            intakes that some students worked in groups ended up not working on
            React at all, I took on the challenge solo so I had no choice but
            doing everything with my responsibility. The home component have become content heavy and the
            code has become very long, but I left it because the site broke down
            when I broke it up into smaller components. I will fix it when I
            gain more knowledge. Since I started building the site from the
            desktop version, when I shrunk the screen, the content overflowed
            the container, and I had a hard time fixing it. I realized the
            weight of the term "mobile first" and decided to use the experience
            and develop mobile first on the next project. Even though I was overwhelmed by the
            fact that it was quite different from JavaScript, but with the help
            of my instructors and classmates, I was able to create a work that I
            was proud of and I was able to deepen my understanding of React.
          </p>
        </article>

        <nav className="external-links">
          <a
            className="button single-work-button livesite"
            href="https://yukowebworks.com/movie-database"
          >
            Live Site
          </a>
          <a className="button single-work-button github" href="">
            GitHub
          </a>
        </nav>
      </section>
    </main>
  );
}

export default PageWorkMovie;

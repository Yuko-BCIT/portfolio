import Helmet from "react-helmet";
import Logo from "../components/logo";
import movie from "../images/movie.jpg";
import previewVideo from "../media/preview.mp4";
import { ReactComponent as React } from "../images/react.svg";
import { ReactComponent as Js } from "../images/js.svg";
import { ReactComponent as Redux } from "../images/redux.svg";
import { ReactComponent as Sass } from "../images/sass.svg";
import { ReactComponent as Xd } from "../images/xd.svg";
import OtherWorks from "../components/OtherWorks";
import ScrollButton from "../components/ScrollButton";
import FadeInAnimation from "../utilities/fadeInAnimation";
import { shadesOfPurple } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import SyntaxHighlighter from "react-syntax-highlighter";
import movieCode1 from "../code/movieCode1";
import movieCode2 from "../code/movieCode2";
import movieCode3 from "../code/movieCode3";

function PageWorkMovie() {
  return (
    <main className="work-details">
      <Helmet>
        <title>React Movie App</title>
        <meta
          name="description"
          content="Preview - the movie database is a React web application that
            fetches movie information from an API, allowing users to browse,
            sort, see details, and favorite the latest movies every time they
            access. React router was used for the fast page loading, and Redux
            allows users to save their favorites until they delete cookies."
        />
      </Helmet>
      <FadeInAnimation />
      <ScrollButton />
      <Logo />
      <h1>React Movie App</h1>

      <section>
        <h2>Preview</h2>

        <figure>
          <img src={movie} alt="screen shot of a movie database website" />
        </figure>

        <div className="tools">
          <h3>Tech Stack</h3>

          {/* icons */}
          <div>
            <React className="icon-tool" />
            <Redux className="icon-tool" />
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
            "Preview - the movie database" is a React web application that
            fetches movie information from an API, allowing users to browse,
            sort, see details, and favorite the latest movies. React router was
            used for the fast page loading, and Redux allows users to save their
            favorites until they delete cookies.
          </p>
          <figure>
            <video autoPlay muted playsInline controls poster={movie}>
              <source src={previewVideo} type="video/mp4" />
              Preview Video
            </video>
          </figure>
        </article>

        <article>
          <h3>Development</h3>
          <p>
            Using Create React App, I wrote functions to fetch movie data from
            TMDB API to display posters, titles, release dates, summaries, and
            ratings, referring to the API documentations.
          </p>
          <div className="code">
            <SyntaxHighlighter
              language="javascript"
              wrapLongLines
              style={shadesOfPurple}
            >
              {movieCode1}
            </SyntaxHighlighter>
          </div>
          <p>
            When a user clicks on add to favorite button, movies are shown on
            favorites page, but when the page is refreshed, favorites disappear.
            To solve this problem, I implemented Redux and wrote functions to
            remember the state, so favorites are stored as long as cookies are
            not deleted.
          </p>
          <div className="code">
            <SyntaxHighlighter
              language="javascript"
              wrapLongLines
              style={shadesOfPurple}
            >
              {movieCode2}
            </SyntaxHighlighter>
          </div>
          <p>
            Also added an extra feature to simulate email subscription without
            sending or storing user input, using onSubmit event and
            preventDefault method.
          </p>
          <div className="code">
            <SyntaxHighlighter
              language="javascript"
              wrapLongLines
              style={shadesOfPurple}
            >
              {movieCode3}
            </SyntaxHighlighter>
          </div>
        </article>

        <article>
          <h3>Takeaways</h3>
          <p>
            This was my first project using React, so there are some drawbacks
            such as heavy content in the Home component, but it was a good
            starting point to learn this great technology and I completely
            enjoyed working with React. API was also new to me and the learning
            curve was quite steep, but I was happy and thrilled when the movie
            poster showed up.
          </p>
          <p>
            It was quite different from Vanilla JavaScript, but I studied
            extensively and asked for help from the instructor and my
            classmates. I learned a lot by actually building the app and
            realized output is important for understanding code. I'd like to
            build more React apps and deepen my understanding of React and APIs.
          </p>
        </article>

        <nav className="external-links">
          <a className="button" href="https://yukowebworks.com/movie-database">
            Live Site
          </a>
          <a
            className="button"
            href="https://github.com/Yuko-BCIT/React-MovieDatabase-app"
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

export default PageWorkMovie;

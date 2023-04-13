import Helmet from "react-helmet";
import highlow from "../images/highlow.jpg";
import highlowVideo from "../media/highlow.mp4";
import { ReactComponent as Html } from "../images/html.svg";
import { ReactComponent as Css } from "../images/css.svg";
import { ReactComponent as Js } from "../images/js.svg";
import { ReactComponent as Bootstrap } from "../images/bootstrap.svg";
import { ReactComponent as Jquery } from "../images/jquery.svg";
import OtherWorks from "../components/OtherWorks";
import FadeInAnimation from "../utilities/fadeInAnimation";
import { shadesOfPurple } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import SyntaxHighlighter from "react-syntax-highlighter";
import gameCode1 from "../code/gameCode1";
import gameCode2 from "../code/gameCode2";

function PageWorkGame() {
  return (
    <main className="work-details">
      <Helmet>
        <title>JavaScript Game</title>
        <meta
          name="description"
          content="High Low is a number guessing game. A player guesses a number
            randomly generated by computer within 10 times, and there are 3
            difficulty levels to choose from. Each wrong guess decreases the
            lives, and at the end of the game, different images and messages are
            displayed depending on whether the player wins or loses."
        />
      </Helmet>
      <FadeInAnimation />
      <h1>JavaScript Game</h1>
      <section>
        <h2>High Low</h2>

        <figure>
          <img src={highlow} alt="screen shot of a game website" />
        </figure>

        <div className="tools">
          <h3>Tech Stack</h3>
          <div>
            <Jquery className="icon-tool" />
            <Bootstrap className="icon-tool" />
            <Js className="icon-tool" />
            <Css className="icon-tool" />
            <Html className="icon-tool" />
          </div>
        </div>
      </section>

      <section className="project">
        <article>
          <h3>Overview</h3>
          <p>
            High Low is a number guessing game in which a player must guess a
            randomly generated number within 10 times. There are 3 difficulty
            levels to choose from, and the range of numbers to guess varies.
          </p>
        </article>

        <article>
          <h3>Development</h3>
          <p>
            Using JavaScript and jQuery, I wrote functions that would generate
            random numbers depending on the levels using conditional statements.
          </p>
          <div className="code">
            <SyntaxHighlighter
              language="javascript"
              wrapLongLines
              style={shadesOfPurple}
            >
              {gameCode1}
            </SyntaxHighlighter>
          </div>
          <p>
            Functions triggered by onclick events were added to generate
            appropriate error messages for missing or invalid input. When the
            inputs are valid, functions were further divided into multiple
            conditionals to display appropriate messages for each case.
          </p>
          <div className="code">
            <SyntaxHighlighter
              language="javascript"
              wrapLongLines
              style={shadesOfPurple}
            >
              {gameCode2}
            </SyntaxHighlighter>
          </div>
          <p>
            Each wrong guess decreases the lives, tells you the secret number is
            higher or lower, and at the end, different images and messages are
            displayed depending on whether you win or lose.
          </p>
          <figure>
            <video autoPlay muted playsInline loop>
              <source src={highlowVideo} type="video/mp4" />
              High Low Video
            </video>
          </figure>
          <p>
            When I got stuck on writing code, I had one-on-one zoom meetings
            with the instructor to ensure I solved the code problems one by one
            and understand why it has to be done that way.
          </p>
        </article>

        <article>
          <h3>Takeaways</h3>
          <p>
            In the first half, I wrote all the functions at once and then tested
            them, which made it very difficult to find out which code was
            causing the error, and the instructor warned me about it. Learning
            from that lesson, I changed the procedure to test with
            console.log&#40;&#41; as soon as I wrote one function, and if there
            was no problem, I moved on to the next function.
          </p>
          <p>
            It was valuable experience to learn how important this approach is
            for debugging and efficient development. The game is simple, but I
            paid attention to every detail of the game and it helped me deepen
            my understanding of conditionals.
          </p>
        </article>

        <nav className="external-links">
          <a tabIndex={0} className="button" href="https://yukowebworks.com/game">
            Live Site
          </a>
          <a tabIndex={0} className="button" href="https://github.com/Yuko-BCIT/game">
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

export default PageWorkGame;

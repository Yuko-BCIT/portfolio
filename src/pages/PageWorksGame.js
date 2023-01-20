import Helmet from "react-helmet";
import Logo from "../utilities/logo";
import highlow from "../images/highlow.jpg";
import gameplan from "../images/gameplan.jpg";
import highlowVideo from "../media/highlow.mp4";
import { ReactComponent as Html } from "../images/html.svg";
import { ReactComponent as Css } from "../images/css.svg";
import { ReactComponent as Js } from "../images/js.svg";
import { ReactComponent as Bootstrap } from "../images/bootstrap.svg";
import { ReactComponent as Jquery } from "../images/jquery.svg";
import OtherWorks from "../components/OtherWorks";

function PageWorkGame() {
  return (
    <main className="work-details">
      <Helmet>
        <title>JavaScript Game</title>
      </Helmet>
      <Logo />
      <h1>JavaScript Game</h1>
      <section>
        <h2>High Low</h2>
        <figure>
          <img src={highlow} alt="screen shot of a game website" />
        </figure>

        <div className="tools">
          <h3>Tools</h3>
          <div>
            <Html className="icon-tool" />
            <Css className="icon-tool" />
            <Js className="icon-tool" />
            <Bootstrap className="icon-tool" />
            <Jquery className="icon-tool" />
          </div>
        </div>
      </section>

      <section className="project">
        <h2>The project</h2>

        <article>
          <h3>Overview</h3>
          <figure>
            <video preload="auto" autoPlay muted playsInline controls>
              <source src={highlowVideo} type="video/mp4" />
              High Low Video
            </video>
          </figure>
          <p>
            High Low is a game which a player guesss randomly generated number
            within 10 times, and there are 3 difficulty levels to choose from. A
            hint message is displayed for each number entered, and at the end of
            the game, a different image and message are displayed depending on
            whether the player wins or loses.
          </p>
        </article>

        <article>
          <h3>Design</h3>
          <p>
            Designed simple, bold layout for each screen of the game with large
            text and buttons for accessibility. After experimenting with various
            colors, I decided on a gradient of red(High) and blue(Low) for the
            background color, in reference to the game title, and a contrasting
            button and font color with the background color. And I made a
            detailed game plan assuming a variety of user input and scenarios, I
            set up detailed conditions to decide the game's functionality.
          </p>

          <figure className="wireframe">
            <img src={gameplan} alt="documented plan for a JavaScript game" />
          </figure>
        </article>

        <article>
          <h3>Development</h3>
          <p>
            Using javascript and jQuery, based on the game plan, I wrote
            funcitons that would generate appropriate error messages for missing
            or invalid input, and for valid input, further divided the funcitons
            into different conditions and displayed the appropriate message for
            each case. When I got stuck in writing code, I had one-on-one zoom
            meetings with the instructor to ensure that I solved the code
            problems one by one and understand why it has to be done that way.
          </p>
        </article>

        <article>
          <h3>Takeaways</h3>
          <p>
            In the first half, I wrote all the functions at once and then tested
            them, which made it very difficult to find out which code was
            causing the error, and the instructor warned me about it. Learning
            from that lesson, in the second half, I changed the procedure to
            test with console.log() as soon as I wrote one function, and if
            there was no problem, I moved on to the next function. It was
            valuable for me to experience firsthand how important this approach
            is for saving time and efficient development. The game I created for
            the first time in my life was simple, but I paid attention to every
            detail of the game and helped me deepen my understanding of
            conditionals.
          </p>
        </article>

        <nav className="external-links">
          <a
            className="button single-work-button livesite"
            href="https://yukowebworks.com/game"
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

export default PageWorkGame;

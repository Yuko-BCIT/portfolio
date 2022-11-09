import highlow from "../images/highlow.png";
import { ReactComponent as Html } from "../images/html.svg";
import { ReactComponent as Css } from "../images/css.svg";
import { ReactComponent as Js } from "../images/js.svg";
import { ReactComponent as Bootstrap } from "../images/bootstrap.svg";
import { ReactComponent as Jquery } from "../images/jquery.svg";
import OtherWorks from "../components/OtherWorks";

function PageWorkGame() {
  return (
    <main className="work-details">
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
            text and buttons for accessibility, and the colors were decided
            after the game features were completed. After experimenting with
            various colors, I decided on a gradient of red and blue for the
            background color, in reference to the game title, and a contrasting
            button and font color with the background color.
          </p>
        </article>

        <nav className="external-links">
          <a className="button" href="">
            XD wireframe
          </a>
          <a className="button" href="">
            Content Plan
          </a>
        </nav>

        <article>
          <h3>Development</h3>
          <p>
            Assuming a variety of user input patterns, I set up detailed
            conditions. Using javascript and jQuery, we wrote funcitons that
            would generate appropriate error messages for missing or invalid
            input, and for valid input, we further divided the funcitons into
            different conditions and displayed the appropriate message for each
            case. When I got stuck in writing code, I had one-on-one zoom
            meetings with the instructor to ensure that I solved the code
            problems one by one and understand why it has to be done that way.
          </p>
        </article>

        <article>
          <h3>Takeaways</h3>
          <p>
            In the first half, I wrote all the functions at once at the
            beginning and then tested them, which made it very difficult to find
            out which code was causing the error, and the instructor warned me
            about it. Learning from that lesson, in the second half, I changed
            the procedure to test with console.log() as soon as I wrote one
            function, and if there was no problem, I moved on to the next
            function. It was valuable for me to experience firsthand how
            important this approach is for saving time and efficient
            development. I am proud to say that the game I created for the first
            time in my life was simple, but I paid attention to every detail of
            the game, and it was completed to a high degree of quality. Creating
            the game helped me deepen my understanding of conditionals.
          </p>
        </article>

        <nav className="external-links">
          <a className="button single-work-button livesite" href="">
            Live Site
          </a>
          <a className="button single-work-button github" href="">
            GitHub
          </a>
        </nav>

        <OtherWorks />

      </section>
    </main>
  );
}

export default PageWorkGame;

import me from "../images/me.jpg";
import { NavLink } from "react-router-dom";
import { ReactComponent as Linkedin } from "../images/linkedin.svg";
import { ReactComponent as Github } from "../images/github.svg";
import { ReactComponent as Email } from "../images/email.svg";

const PageAbout = () => (
  <main className="about">
    <section>
      <h1>About</h1>
      {/* use float around image */}
      <article>
        <img className="me" src={me} alt="smiling lady" />
        <p>
          Yuko means "sweet lady" in Japanese. Oppsed to my gentle and calm
          character, I like adventures and challanges, open minded and like
          seeing the world that gives me different perspective of life. My motto
          is <strong>"It's never too late to start something new." </strong>Learned Japanese Archery in university since my favorite manga
          character played it. In 2020, I re-started snowboarding and took
          classes at Cypress. And in 2022, I decided to jump into the world of
          web development.
        </p>
        <p>
          Why web development? I always wanted to make a website for my father's
          company, since they do great work but not many people are aware of his
          business. And I asked my brother who is a programmer, but he said he
          specialized in back-end, not front-end. So I decided, if nobody does
          it, I will do it! And that's how I started studying online and I got
          hooked in fun of web development. I also like to help small business
          grow. Before I took BCIT's front end web development program, I
          designed, developed, and deployed a functional website by just
          learning through online courses and I'm proud of myself!
        </p>
        <p>I like ...dogs cats archery English to Japanese translation</p>
      </article>
      <NavLink to="/work">
        <p className="button ">See my work</p>
      </NavLink>
    </section>

    <section>
      <h2>Contact Me</h2>
      <p>
        Interested in working with me? Please contact me through email,
        LinkedIn, or GitHub. Looking forward to hearing from you!
      </p>

      <div className="icon-wrapper">
        <a href="mailto:yukoool@hotmail.com">
          <Email className="icon icon-about" aria-label="email icon" />
        </a>
        <a href="https://www.linkedin.com/in/yuko-k-224247184/">
          <Linkedin className="icon icon-about" aria-label="linkedin icon" />
        </a>
        <a href="https://github.com/Yuko-BCIT">
          <Github className="icon icon-about" aria-label="github icon" />
        </a>
      </div>
    </section>
  </main>
);

export default PageAbout;

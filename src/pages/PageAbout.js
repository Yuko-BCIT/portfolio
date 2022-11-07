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
          <strong>Yuko</strong> means "sweet lady" in Japanese. Despite my
          gentle and down-to-earth manners, I like adventures and challenges,
          and often surprise friends and family with my bold and daring actions.
          I worked hard, saved up money, and came to Canada to study for just
          one year, and I found myself immigrating here. My motto is "It's never
          too late to start something new." Started Japanese archery at university since my favorite manga character played in it. Restarted snowboarding and took
          lessons at Cypress in 2020. And in 2022, I decided to jump into the
          world of web development.
        </p>
        <p>
          <strong>Why</strong> web development? I always wanted to make a
          website for my father's company, since they do great work but not many
          people are aware of his business. When I asked my brother, a
          programmer, to build a website for him, he told me that he specializes
          in back-end, not front-end. I didn't even understand what that meant.
          But I decided, if no one else will do it, I will. And once I started
          studying online, I got hooked on the fun of building a website from
          scratch, and that's how my journey began. 
          {/* Before I took BCIT's front
          end web development program, I designed, developed, and deployed a
          fully functional website by just learning through online courses and
          I'm proud of myself! */}
        </p>
        <p>
          <strong>Customer service</strong> has been my background and I've been
          enjoying interacting with my customers. Now my passion has shifted to
          using the experience and knowledge to create websites that bring out
          what clients want, go above and beyond, and help businesses grow.
        </p>
        <p>
          <strong>My favorites</strong> dogs cats archery English to Japanese
          translation 絵文字入れる
        </p>
      </article>
      <NavLink to="/works">
        <p className="button ">See my works</p>
      </NavLink>
    </section>

    <section>
      <h2>Contact Me</h2>
      <p>
        Interested in working with me? Contact me through email, LinkedIn, or
        GitHub. Looking forward to hearing from you!
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

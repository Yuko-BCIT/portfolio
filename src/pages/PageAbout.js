import me from "../images/me.jpg";
import { NavLink } from "react-router-dom";
import { ReactComponent as Linkedin } from "../images/linkedin.svg";
import { ReactComponent as Github } from "../images/github.svg";
import { ReactComponent as Email } from "../images/email.svg";
import frenchie from "../images/frenchie.jpg";
import { Helmet } from "react-helmet";

const PageAbout = () => (
  <main className="about">
    <Helmet>
      <title>About</title>
      <meta name="description" content="About me" />
    </Helmet>
    <section>
      <h1>About</h1>
      {/* use float around image */}
      <article>
        <img className="me" src={me} alt="smiling lady" />
        <p>
          <strong>Yuko</strong> means "sweet lady" in Japanese. Despite my
          gentle and down-to-earth character, I enjoy adventures and challenges,
          and often surprise friends and family with my bold and daring actions.
          My motto is "It's never too late to start something new." And in 2022,
          I decided to jump into the world of web development and gained
          hands-on training and knowledge in BCIT's intensive Front End Web
          Development program.
        </p>
        <p>
          <strong>Why</strong> web development? I always wanted to make a
          website for my father's welding company, since they do great work but
          not many people are aware of his business. When I asked my brother, a
          programmer, to build a website for him, he told me that he specializes
          in back-end, not front-end. I didn't even understand what that meant.
          But I decided, if no one else will do it, I will. And once I started
          studying online, I got hooked on the fun of building a website from
          scratch, and that's how my journey began.
          {/* Before I applied for BCIT's
        front end web development program, I designed, developed, and deployed
        a functional website by just learning through online courses and I'm
        proud of myself! */}
        </p>

        {/* <p>
          <strong>Customer service</strong> has been my background and I've been
          enjoying interacting with my customers. Now my passion has shifted to
          using the experience and knowledge to create websites that bring out
          what clients want, go above and beyond, and help businesses grow.
        </p> */}

        <p>
          <strong>I love</strong> French Bulldogs (I follow cute Frenchies on
          Instagram), bike riding, snowboarding, karaoke and ramen noodles!
        </p>
      </article>

      <NavLink to="/works">
        <figure className="frenchie">
          <img src={frenchie} alt="French bulldog" />
          <figcaption>Web Works</figcaption>
        </figure>
      </NavLink>
    </section>

    <section>
      <h2>Contact Me</h2>
      <p>
        Interested in working with me? Contact me through email, LinkedIn and
        check out my GitHub repos!
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

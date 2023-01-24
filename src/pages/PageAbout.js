import me from "../images/me.jpg";
import { NavLink } from "react-router-dom";
import koi from "../images/koi.jpg";
import { Helmet } from "react-helmet";
import Logo from "../utilities/logo";

const PageAbout = () => (
  <main className="about">
    <Helmet>
      <title>About</title>
      <meta name="description" content="About me" />
    </Helmet>
    <Logo />
    <section>
      <h1>About</h1>
      {/* use float around image */}
      <article>
        <img className="me" src={me} alt="smiling lady" />
        <p>
          <strong>Yuko</strong> means "sweet lady" in Japanese. Despite my
          gentle and down-to-earth character, I enjoy adventures and challenges
          that often surprise my family and friends. My motto is "It's never too
          late to learn something new." And in 2022, I decided to jump into the
          world of web development and gained hands-on training and knowledge in
          BCIT's intensive Front End Web Development program.
        </p>

        <p>
          <strong>I love</strong> French Bulldogs (I follow cute Frenchies on
          Instagram), bike riding, snowboarding, karaoke and ramen noodles!
          <br />
          Interested in working with me? Contact me through email, LinkedIn and
          check out my GitHub repos!
        </p>
      </article>

      <figure className="call-to-action pulse">
        <NavLink to="/works">
          <img src={koi} alt="bamboo forest" />
          <figcaption>Works</figcaption>
        </NavLink>
      </figure>
    </section>
  </main>
);

export default PageAbout;

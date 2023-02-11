import me from "../images/me.jpg";
import { Helmet } from "react-helmet";
import Skills from "../components/SkillsCube";
import Logo from "../components/logo";

const PageAbout = () => (
  <main className="about">
    <Helmet>
      <title>About</title>
      <meta name="description" content="About me" />
    </Helmet>
    <Logo />
    <section>
      <h1>About</h1>

      <article>
        <img className="me" src={me} alt="smiling lady" />
        <p>
          <strong>Yuko</strong> means "sweet lady" in Japanese. Despite my
          gentle and down to earth nature, I enjoy adventures and challenges.
          And in 2022, I decided to jump into the world of web development and
          gained hands-on experience in BCIT's intensive Front End Web
          Development program.
        </p>
        <p>
          I <strong>Love</strong> French Bulldogs (I follow
          cute Frenchies on Instagram), bike riding, snowboarding, karaoke and
          ramen noodles!
        </p>
        <p>
          I enjoy working with React, JavaScript, CSS, and WordPress. Interested
          in working with me? Contact me through email, LinkedIn and check out
          my GitHub repos!
        </p>
      </article>
      <article>
        <Skills />
        <p className="click-the-cube">
          Click the &#127922; and see my projects!
        </p>
      </article>
    </section>
  </main>
);

export default PageAbout;

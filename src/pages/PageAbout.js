import me from "../images/me.jpg";
import { Helmet } from "react-helmet";
import Skills from "../components/SkillsCube";
import Logo from "../components/logo";

const PageAbout = () => (
  <main className="about">
    <Helmet>
      <title>About</title>
      <meta
        name="description"
        content="Hi, I am a web developer currently based in Vancouver and I gained hands-on experience in BCIT's Front End Web Developer program. The technologies I enjoy working with are React, JavaScript, APIs,
          CSS, WordPress and I'm keen on learning new ones. "
      />
    </Helmet>
    <Logo />
    <section>
      <h1>About</h1>

      <article>
        <img className="me" src={me} alt="smiling lady" />
        <p>
          Hi! I'm Yuko, which means "sweet lady" in Japanese. Despite my gentle
          nature, I enjoy adventures and challenges. Customer service has been
          my passion for years, but the pandemic motivated me to make a drastic
          career change and gain hands-on experience in BCIT's Front End Web
          Developer program.
        </p>
        <p>
          Why web development? I always wanted a website for my father's small
          business, because they do great work but not many people know about
          it. So I decided to build one myself and started learning how to code
          through Udemy and Codecademy. It didn't take much time until I got
          hooked on the fun of building a website from scratch, and that's how
          my journey began.
        </p>
        <p>
          The technologies I enjoy working with are React, JavaScript, APIs,
          CSS, WordPress and I'm keen on learning new ones.
        </p>
        <p>
          Other than coding, I love French Bulldogs &#40;I follow cute Frenchies
          on Instagram&#41;, bike riding, snowboarding, karaoke and travelling
          the world. My favorite places are Thailand and Bali.
          <br />I would love to hear from you! Contact me through email,
          LinkedIn and check out my GitHub repos!
        </p>
      </article>
      <article>
        <Skills />
        <p className="click-the-cube">Click &#127922; and see my projects!</p>
      </article>
    </section>
  </main>
);

export default PageAbout;

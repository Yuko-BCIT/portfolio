import me from "../images/me.jpg";
import { Helmet } from "react-helmet";
import { useEffect } from "react";

const PageAbout = () => {
  useEffect(() => {
    let circle = document.querySelector(".about-container");
    window.addEventListener("scroll", () => {
      let value = window.scrollY;

      // enlarge circle on scroll
      circle.style.clipPath = `circle(${value + `px`} at center)`;
      circle.style.webkitClipPath = `circle(${value + `px`} at center)`; // Safari

      // reduce img brightness on scroll
      circle.style.filter = `brightness(${110 - value * 0.06}%)`;
    });
  }, []);

  return (
    <main className="about">
      <Helmet>
        <title>About</title>
        <meta
          name="description"
          content="I am a web developer based in Vancouver and gained hands-on experience in BCIT's Front End Web Developer program. 
          The technologies I enjoy working with are React, JavaScript, APIs, CSS, WordPress and I'm keen on learning new ones."
        />
      </Helmet>
      <h1>About</h1>
      <p className="scroll-text">Scroll and see</p>
      <div className="about-container"></div>

      <section>
        <article>
          <h2>Hello! &#128075;</h2>
          <img className="me" src={me} alt="smiling lady" />
          <p>
            I'm Yuko, which means "sweet lady" in Japanese. Despite my gentle
            nature, I enjoy adventures and challenges. Customer service has been
            my passion for years, but the pandemic motivated me to make a
            drastic career change and gain hands-on experience in BCIT's Front
            End Web Developer program.
          </p>
          <p>
            Why web development? I always wanted a website for my father's small
            business, because they do great work but not many people know about
            it. So I decided to build one myself and started learning how to
            code through Udemy and Codecademy. It didn't take much time until I
            got hooked on the fun of building a website from scratch, and that's
            how my journey began.
          </p>
          <p>
            Other than coding, I love French Bulldogs &#40;I follow cute
            Frenchies on Instagram&#41;, bike riding, snowboarding, ukulele and
            travelling the world. My favorite places are Thailand and Bali.
          </p>
          <p>
            I would love to hear from you&#128522; Contact me through email,
            LinkedIn and check out my GitHub repos!
          </p>
        </article>
      </section>
    </main>
  );
};

export default PageAbout;

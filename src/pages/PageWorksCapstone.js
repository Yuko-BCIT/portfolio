import Helmet from "react-helmet";
import Logo from "../components/logo";
import capstone from "../images/tweeling.jpg";
import capstoneVideo from "../media/capstone.mp4";
import trello from "../images/trello.jpg";
import { ReactComponent as PHP } from "../images/php.svg";
import { ReactComponent as Js } from "../images/js.svg";
import { ReactComponent as Sass } from "../images/sass.svg";
import { ReactComponent as Wordpress } from "../images/wordpress.svg";
import { ReactComponent as WordpressW } from "../images/wordpress-white.svg";
import { ReactComponent as Xd } from "../images/xd.svg";
import OtherWorks from "../components/OtherWorks";
import ScrollButton from "../components/ScrollButton";
import FadeInAnimation from "../utilities/fadeInAnimation";
import { shadesOfPurple } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import SyntaxHighlighter from "react-syntax-highlighter";
import capCode1 from "../code/capCode1";
import capCode2 from "../code/capCode2";

function PageWorkCapstone() {
  return (
    <main className="work-details">
      <Helmet>
        <title>Capstone Project</title>
        <meta
          name="description"
          content="Tweeling Bakery is a multi-purpose e-commerce website designed to
            help a business start online sales, increase local customers, and
            hire new team members. Developed by a team of 4 using WordPress
            &#40;PHP, JavaScript, Sass and MySQL&#41; with Woocommerce plugins."
        />
      </Helmet>
      <FadeInAnimation />
      <ScrollButton />
      <Logo />
      <h1>Capstone Project</h1>

      <section>
        <h2>Tweeling Bakery</h2>

        <figure>
          <img src={capstone} alt="screen shot of a bakery website" />
        </figure>

        <div className="tools">
          <h3>Tech Stack</h3>
          <div>
            <PHP className="icon-tool" />
            <Sass className="icon-tool" />
            <Js className="icon-tool" />
            <Wordpress className="icon-tool wordpress-b" />
            <WordpressW className="icon-tool wordpress-w" />
            <Xd className="icon-tool" />
          </div>
        </div>
      </section>

      <section className="project">
        <article>
          <h3>Overview</h3>
          <p>
            Tweeling Bakery is a multi-purpose e-commerce website designed to
            help a business start online sales, increase local customers, and
            hire new team members. Developed by a team of 4 using WordPress
            &#40;PHP, JavaScript, Sass and MySQL&#41; with Woocommerce plugins.
          </p>
          <figure>
            <video autoPlay muted playsInline controls poster={capstone}>
              <source src={capstoneVideo} type="video/mp4" />
              Tweeling Bakery Video
            </video>
          </figure>
        </article>

        <article>
          <h3>Development</h3>
          <p>
            We used GitHub to version control source code, each of us working on
            different branch. Trello &#40;Agile methodology&#41; made it easier
            to divide tasks into small pieces, visualize who is working on what,
            and tackle one task after another.
          </p>
          <figure className="wireframe">
            <img src={trello} alt="project management tool" loading="lazy" />
          </figure>
          <p>
            I was in charge of developing the location page and integrating APIs
            into the website. I registered our project with Google Maps Platform
            and restricted API key usage to our URL only to prevent malicious
            usage. And created a JavaScript file based on the documentation to
            fetch map data,
          </p>
          <div className="code">
            <SyntaxHighlighter
              language="javascript"
              wrapLongLines
              wrapLines
              style={shadesOfPurple}
            >
              {capCode1}
            </SyntaxHighlighter>
          </div>
          <p>
            then wrote PHP code to call the JavaScript file and make shops'
            information clickable &#40;addresses and phone numbers&#41; on the
            map. To make the code reusable, I put it in a PHP template file and
            called it on multiple pages.
          </p>
          <div className="code">
            <SyntaxHighlighter
              language="php"
              wrapLongLines
              wrapLines
              style={shadesOfPurple}
            >
              {capCode2}
            </SyntaxHighlighter>
          </div>
          <p>
            My role also included styling landing page, testing the site on
            multiple browsers and devices, setting up Stripe account and testing
            payments, and configuring the backend settings such as delivery
            areas, options and rates, and tax settings.
          </p>
        </article>

        <article>
          <h3>Takeaways</h3>
          <p>
            Although our team worked mostly remotely, we were able to
            communicate proactively using Trello and Slack responding
            immediately to questions and problems. The team also made effective
            use of file sharing on every stage from design to coding, and
            everyone perticipated in brainstorming ideas to choose the best.
          </p>
          <p>
            We learned to be proactive in picking up tasks and responsible for
            getting them done under strict deadline and requirements. When
            someone got stuck in solving a problem, we gathered our knowledge
            and resources, helped each other and solved the problem.
          </p>
          <p>
            With 4 people working together, sometimes disagreements arose.
            However, we were open to discussions and resolved conflicts while
            respecting and encouraging each other. This project taught me that
            through open communication and mutual respect as a team, we can
            create great work that I could not have done on my own.
          </p>
        </article>

        <nav className="external-links">
          <a
            className="button"
            href="https://tweelingbakery.bcitwebdeveloper.ca/"
          >
            Live Site
          </a>
          <a
            className="button"
            href="https://github.com/htpwebdesign/tweeling-bakery"
          >
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

export default PageWorkCapstone;

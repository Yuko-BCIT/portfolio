import Helmet from "react-helmet";
import capstoneVideo from "../media/capstone.mp4";
import capstone from "../images/capstone.jpg";
import capxd1 from "../images/capxd1.jpg";
import capxd2 from "../images/capxd2.jpg";
import trello from "../images/trello.jpg";
import { ReactComponent as PHP } from "../images/php.svg";
import { ReactComponent as Js } from "../images/js.svg";
import { ReactComponent as CSS } from "../images/css.svg";
import { ReactComponent as Woo } from "../images/woo.svg";
import { ReactComponent as Xd } from "../images/xd.svg";
import { ReactComponent as Wordpress } from "../images/wordpress.svg";
import OtherWorks from "../components/OtherWorks";

function PageWorkCapstone() {
  return (
    <main className="work-details">
      <Helmet>
        <title>Capstone Project</title>
      </Helmet>
      <h1>Capstone Project</h1>
      <section>
        <h2>Tweeling Bakery</h2>
        <figure>
          <img src={capstone} alt="screen shot of a bakery website" />
        </figure>

        <div className="tools">
          <h3>Tools</h3>
          <div>
            <PHP className="icon-tool" />
            <Js className="icon-tool" />
            <CSS className="icon-tool" />
            <Wordpress className="icon-tool wordpress" />
            <Woo className="icon-tool" />
            <Xd className="icon-tool" />
          </div>
        </div>
      </section>

      <section className="project">
        <h2>The project</h2>

        <article>
          <h3>Overview</h3>
          <figure>
            <video preload="auto" autoPlay muted playsInline controls>
              <source src={capstoneVideo} type="video/mp4" />
              High Low Video
            </video>
          </figure>
          <p>
            Tweeling Bakery is a fictional business website, developed with
            WordPress using Woocommerce online store plugins. Our team of 4
            worked together to create the structure, content, and designed the
            website, requested by fictional clients to allow more local
            customers to learn about their business and products, place orders,
            and get them delivered to their doors. Then we developed the website
            using WordPress and languages such as PHP, Javascript, CSS, and
            HTML.
          </p>
        </article>

        <article>
          <h3>Design</h3>
          <p>
            We shared files and proceeded with the design, first determining the
            site's structure and information architecture using Google Docs, and
            then writing out the content for each page.
          </p>

          <figure className="wireframe">
            <img src={capxd1} alt="wireframe of a bakery website" />
          </figure>

          <p>
            We then used Adobe XD to visualize the contents of the docs in
            wireframes, and turned that into figh fidelity mockup to actually
            insert images and colors. We tried several colors, logos, icons and
            chose which ones would best fit the image of the site. Then we
            deconstructed the site structure into pages, parts and templates and
            displayed onto the mockup to be ready for development.
          </p>

          <figure className="wireframe">
            <img src={capxd2} alt="wireframe of a bakery website with color" />
          </figure>
        </article>

        <article>
          <h3>Development</h3>
          <p>
            Using Trello, a project management tool, we divided tasks into
            bite-size pieces and had each person in charge of one page to avoid
            merge conflicts. When a task was completed, the task was dragged to
            "Done" and the next task was moved to "Doing." This process made it
            easy to see who was currently working on what.
          </p>

          <figure className="wireframe">
            <img src={trello} alt="project management tool" />
          </figure>

          <p>
            We used GitHub to share code, pushed and merged when the edits were
            finished to some extent, and notified members via Slack. When we
            wanted to edit pages other than our own, we made sure that no two
            people edited the same file at the same time for smooth merging.
            After finising writing the content for the site and making sure the
            functionality worked properly, we began the styling process.
          </p>
        </article>

        <article>
          <h3>My Role</h3>
          <p>
            I was active in coming up with design ideas and tried out different
            layouts and colors on XD. In coding, I was in charge of the location
            page and registered the project on Google Map API, then wrote codes
            to call API to receive map and location information of the fictional
            shops. Then I created a JavaScript file, a PHP template file to call
            the map on multiple pages. I also setup Stripe account and tested
            payments, configured the backend settings such as delivery areas,
            options and rates, tax settings, etc.
          </p>
        </article>

        <article>
          <h3>Takeaways</h3>
          <p>
            Although our team worked primarily remotely, we were able to
            communicate proactively using Slack and respond immediately to any
            suggestions or problems. We also made effective use of file sharing
            so that everyone could brainstorm the ideas they had, so we could
            choose the best ones from a variety of ideas. We were able to have
            an experience similar to that of doing actual work situation. I
            learned to be proactive in picking up tasks, and to be responsible
            for what I do. This project taught me the importance and fun of
            teamwork creating a work together.
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

        <OtherWorks />
      </section>
    </main>
  );
}

export default PageWorkCapstone;

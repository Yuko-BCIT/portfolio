import portfolio from "../images/portfolio.png";
import { ReactComponent as React } from "../images/react.svg";

function PageWorkPortfolio() {
  return (
    <main className="work-details">
      <h1>Portfolio</h1>

      <section>
        <h2>Yuko Web Works</h2>
        <figure>
          <img src={portfolio} alt="screen shot of a portfolio website" />
        </figure>

        <div className="tools">
          <h3>Main tools</h3>
          <div>
            <React className="icon-tool" />
          </div>
        </div>
      </section>

      <section className="project">
        <h2>The project</h2>

        <article>
          <h3>Overview</h3>
          <p>
            I have included my favorite work from BCIT's many projects in my
            portfolio using React. A dark and light mode is included, allowing
            users to switch between background and font colors.
          </p>
        </article>

        <article>
          <h3>Design</h3>
          <p>
            Made a style guide to determine fonts, colors, and a rough design,
            documented the content plan, created a wireframe in XD based on that
            plan, and rearranged the site structure based on the instructor's
            advice and other inspiring developers' portfolios.
          </p>
        </article>

        <nav className="external-links">
          <a className="button" href="">
            XD wireframe
          </a>
          <a className="button" href="">
            XD prototype
          </a>
        </nav>

        <article>
          <h3>Development</h3>
          <p>
            I created the app with Create React App and divided the site into
            components, first styling the header, footer, and main layout in the
            order mobile -> tablet -> desktop and finished styling to some
            extent. Then I added content, photos, etc., and after the content
            was complete, I added dark mode and other features, and finally
            touched up the rest of the detailed styling.
          </p>
        </article>

        <article>
          <h3>Takeaways</h3>
          <p>
            Based on the previous experience, the styling was done in a
            mobile-first manner, which made it smooth and efficient. However,
            most of the styling was done before the content, which took some
            time, and the content was put on the back burner and I had to rush
            writing contents at the end. Also, I tried to add various functions
            before writing the content, but it ended up being difficult and not
            going anywhere, which delayed the development. As I learned in the
            project management class, when time is limited, "nice-to-have
            features" should come last and do what matters most in the early
            stages of the project. In the next project, I would like to proceed
            in the following order: content, styling, and features.
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
      </section>
    </main>
  );
}

export default PageWorkPortfolio;

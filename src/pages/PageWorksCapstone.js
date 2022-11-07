import capstone from "../images/capstone.jpeg";

function PageWorkCapstone() {
  return (
    <main className="work-details">
      <h1>Capstone Project</h1>
      <section>
        <h2>Tweeling Bakery</h2>
        <figure>
          <img src={capstone} alt="screen shot of a bakery website" />
        </figure>

        <div className="tools">
          <h3>Main tools</h3>
          <div></div>
        </div>
      </section>

      <section className="project">
        <h2>The project</h2>

        <article>
          <h3>Overview</h3>
          <p>
            Tweeling Bakery is a fictional business website, developed using the
            Woocommerce online store features. Our team of 4 worked together to
            create the structure, content, and design of the website, which was
            requested by the owners(twin brother and sister) to allow more local
            customers to learn about their business and to be able to browse and
            sort products, place orders, and get them delivered to their doors.
            Then we developed the website using WordPress and languages such as
            PHP, Javascript, CSS, and HTML.
          </p>
        </article>

        <article>
          <h3>Design</h3>
          <p>
            The 4 of us shared files and proceeded with the design, first
            determining the site's structure and information architecture using
            Google Docs, and then writing out the content for each page. We then
            used XD to visualize the contents of the docs in wireframes, and
            turned that into figh fidelity mockup to actually insert images and
            colors. We tried several colors, logos, icons and chose which ones
            would best fit the image of the site.
          </p>
        </article>

        <div className="external-links">
          <a className="button" href="">
            XD wireframe
          </a>
          <a className="button" href="">
            XD prototype
          </a>
        </div>

        <article>
          <h3>Development</h3>
          <p>
            Using Trello, a project management tool, we divided tasks into
            bite-size pieces and basically had one person in charge of one page
            to avoid merge conflicts. When a task was completed, the task was
            dragged to "Done" and the next task was moved to "doing." This
            repetitive process made it easy to see who was currently working on
            what. We used GihHub to share code, pushed and merge edits when the
            edits were finished to some extent, and notified members via Slack.
            When we wanted to edit pages other than our own, we asked for
            permission and made sure that no two people edited the same file at
            the same time for smooth merging.After writing the content for the
            site and making sure the functionality worked properly, we began the
            styling process.
          </p>
        </article>

        <article>
          <h3>My Role</h3>
          <p>
            I was active in coming up with design ideas and tried out different
            layouts and colors on XD. In coding, I was in charge of the location
            page and needed the Google Maps API to display the map, so I first
            created a Google Business account, registered the project, and
            received an API key. Then I created a JavaScript file, registered
            the function to call it in PHP, and created a template to call the
            map on multiple pages. In addition, I was involved in editing the
            PRODUCTS page to help my team mate. I also configured the Stripe
            account and API to allow payments on the online store, and
            configured the backend settings such as delivery areas, options and
            rates, tax settings, etc. I was also responsible for testing the
            online store many times to make sure the orders worked properly.
          </p>
        </article>

        <article>
          <h3>Takeaways</h3>
          <p>
            Although our team worked primarily remotely, we were able to
            communicate proactively using Slack and respond immediately to any
            suggestions or problems. We also made effective use of file sharing
            so that everyone could brainstorm the ideas they had, so we could
            choose the best ones from a variety of ideas. I think we were able
            to have an experience similar to that of doing actual work, where we
            basically did the parts we were responsible for on our own and
            collaborated on the parts we needed help with. Because of the remote
            nature of the project, we did not have many opportunities to
            actually meet and discuss things, and there were a few
            misunderstandings, so I think we should have communicated more when
            in doubt instead of just assuming things.
          </p>
        </article>

        <div className="external-links">
          <a className="button single-work-button livesite" href="">
            Live Site
          </a>
          <a className="button single-work-button github" href="">
            GitHub
          </a>
        </div>
      </section>
    </main>
  );
}

export default PageWorkCapstone;

import me from "../images/me.jpg";

function PageAbout() {
  return (
    <main className="about">
      <section>
        <h1>About</h1>
        {/* use float around image */}
        <article>
          <img className="me" src={me} alt="smiling lady" />
          <p>
            I'm Yuko Kitahata. Yuko means "excellent and sweet lady" in
            Japanese. Oppsed to my gentle and calm character, I like adventures
            and challanges, open minded and like seeing the world that gives me
            different perspective of life. My motto is it's never too late to
            start something new. Learning Japanese Archery in university since
            my favorite manga character played it. Re-started snowboarding and took classes at Cypress in
            2020. And in 2022, I decided to jump into the world of web
            development.
          </p>
        </article>
        <p className="button button-seemywork">See my work</p>
      </section>

      <section>
        <h2>Contact Me</h2>
        <p>
          Interested in working with me? Please contact me through email,
          LinkedIn, or GitHub. Looking forward to hearing from you!
        </p>
      </section>
    </main>
  );
}

export default PageAbout;

import me from "../images/me.jpg";

function PageAbout() {
  return (
    <main className="about">
      <section>
        <h1>About</h1>
        {/* use float around image */}
        <article>
          <img className="me" src={ me } alt="smiling lady" />
          <p>I'm Yuko Kitahata. Yuko means "excellent and sweet lady" in Japanese. Oppsed to my gentle and calm character, I like adventures and challanges, open minded and like seeing the world that gives me different perspective of life. My motto is it's never too late to start something new. Learning Japanese Archery in university since my favorite manga character played it. Re-started snowboarding in 2020. And in 2022, I decided to get into a school to learn web development.</p>
        </article>
        <p className="button-seemywork">See my work</p>ß
      </section>
    </main>
  );
}

export default PageAbout;

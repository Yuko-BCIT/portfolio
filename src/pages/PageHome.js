import { NavLink } from "react-router-dom";
import lotus from "../images/lotus.jpg";
import { ReactComponent as Logo } from "../images/logo.svg";
function PageHome() {
  return (
    <main className="home">
      <div>
        <Logo className="logo-home" />
      </div>
      <section className="image-container">
        <h1>Web Developer</h1>
        <span class="orbs">
          <span>W</span>
          <span>e</span>
          <span>b</span>
          <span> D</span>
          <span>e</span>
          <span>s</span>
          <span>i</span>
          <span>g</span>
          <span>n</span>
          <span>e</span>
          <span>r</span>
        </span>
        <h2>Yuko Kitahata</h2>
        <p>
          Gained hands-on training building responsive websites and apps from scratch using multiple platforms. Always enjoy challanges and learning new technologies!
        </p>
        <NavLink to="/works">
          <figure className="round-image lotus">
            <img src={lotus} alt="lotus illustration" />
            <figcaption>Web Works</figcaption>
          </figure>
        </NavLink>
      </section>
    </main>
  );
}

export default PageHome;

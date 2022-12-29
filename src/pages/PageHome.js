import { NavLink } from "react-router-dom";
import Logo from "../utilities/logo";
import lotus from "../images/lotus.jpg";

function PageHome() {
  return (
    <main className="home">
      <Logo />
      <section>
        <h1>Yuko Kitahata</h1>
        <span class="orbs">
          <span>W</span>
          <span>e</span>
          <span>b</span>
          <span> D</span>
          <span>e</span>
          <span>v</span>
          <span>e</span>
          <span>l</span>
          <span>o</span>
          <span>p</span>
          <span>e</span>
          <span>r</span>
        </span>
        {/* <h2>Yuko Kitahata</h2> */}
        <p>
          I enjoy building responsive websites and apps from scratch using multiple platforms
          and frameworks!
        </p>
        <figure className="lotus">
          <NavLink to="/works">
            <img src={lotus} alt="lotus illustration" />
            <figcaption>Works</figcaption>
          </NavLink>
        </figure>
      </section>
    </main>
  );
}

export default PageHome;

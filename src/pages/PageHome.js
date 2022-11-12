import { NavLink } from "react-router-dom";
import laptop from "../images/laptop.jpg";
import lotus from "../images/lotus.jpg";
import logo from "../images/logo.png";
function PageHome() {
  return (
    <main className="home">
      <div>
        <img className="logo-home" src={logo} alt="logo of Yuko Web Works" />
      </div>
      <section className="image-container">
        <h1>
          Yuko Kitahata
          <br />
          Web Developer
        </h1>

        <figure>
          <img
            className="home-image"
            src={laptop}
            alt="laptop and glasses on a desk"
          />
        </figure>

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

import laptop from "../images/laptop.jpg";
import Header from "../components/Header";
import { NavLink } from "react-router-dom";

function PageHome() {
  return (
    <>
      <Header />
      <main className="home">
        <section>
          <div className="introduction">
            <h1>Hi, I'm Yuko, a front end web developer.</h1>
            <h2>React and design is my favorite part of web development.</h2>
          </div>

          <figure>
            <img
              className="home-image"
              src={laptop}
              alt="laptop and glasses on a desk"
            />
            <NavLink to="/work">
              <p className="button-seemywork">See my work</p>
            </NavLink>
          </figure>
        </section>
      </main>
    </>
  );
}

export default PageHome;

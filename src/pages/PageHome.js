import { NavLink } from "react-router-dom";
import Logo from "../utilities/logo";
import lotus from "../images/lotus.jpg";
import { useState } from "react";

function PageHome() {
  const [letterClass, setLetterClass] = useState("text-animate");
  const nameArray = [
    "Y",
    "u",
    "k",
    "o",
    "  ",
    "K",
    "i",
    "t",
    "a",
    "h",
    "a",
    "t",
    "a",
  ];
  const devArray = [
    "W",
    "e",
    "b",
    "  ",
    "D",
    "e",
    "v",
    "e",
    "l",
    "o",
    "p",
    "e",
    "r",
  ];

  const AnimatedLetters = ({ letterClass, strArray, index }) => {
    return (
      <span>
        {strArray.map((char, i) => (
          <span key={char + i} className={`${letterClass} _${i + index}`}>
            {char}
          </span>
        ))}
      </span>
    );
  };

  return (
    <main className="home">
      <Logo />
      <section>
        <div>
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              index={0}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={devArray}
              index={13}
            />
          </h1>
          <h2>
            I enjoy building responsive websites and apps from scratch using
            multiple platforms and frameworks!
          </h2>
        </div>

        <figure className="call-to-action">
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

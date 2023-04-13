import { ReactComponent as Rocket } from "../images/rocket.svg";
import { useState, useEffect } from "react";

function ScrollButton() {
  const [backToTop, setBackToTop] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      // scroll button appears after 1000px
      if (window.scrollY > 1000) {
        setBackToTop(true);
      } else {
        setBackToTop(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      {backToTop && (
        <button className="top" onClick={scrollUp}>
          top
          <Rocket />
        </button>
      )}
    </>
  );
}

export default ScrollButton;

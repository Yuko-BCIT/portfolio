import { ReactComponent as Rocket } from "../images/rocket.svg";
import { useState, useEffect } from "react";

function ScrollButton() {
  const [backToTop, setBackToTop] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      // when scrolled to 1500px vertically, scroll button appears
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
        <div className="top" onClick={scrollUp}>
          top
          <Rocket />
        </div>
      )}
    </>
  );
}

export default ScrollButton;

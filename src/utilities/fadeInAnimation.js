import { useEffect } from "react";

function FadeInAnimation() {
  useEffect(() => {
    const articleElements = document.querySelectorAll("article");

    window.addEventListener("scroll", () => {
      articleElements.forEach((article) => {
        let top = article.getBoundingClientRect().top;

        // if the top of the article reaches this point, it adds animation class
        if (top < window.innerHeight - 100) {
          // setAnimate(false);
          article.classList.add("animate__animated", "animate__fadeInRight");
          article.style.visibility = "visible";
        }
      });
    });
  }, []);
}

export default FadeInAnimation;

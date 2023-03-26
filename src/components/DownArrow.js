import { useEffect } from "react";
import { ReactComponent as Arrow } from "../images/arrow.svg";

function DownArrow() {
  // arrow icon on Home
  useEffect(() => {
    const downArrow = document.querySelector(".down-arrow");

    window.addEventListener("scroll", () => {
      let top = downArrow.getBoundingClientRect().top;
      if (top < window.innerHeight - 200) {
        downArrow.style.visibility = "hidden";
      }
    });
  }, []);

  return (
    <div className="down-arrow">
      <Arrow />
    </div>
  );
}

export default DownArrow;

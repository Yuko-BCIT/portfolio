import { useState, useEffect } from "react";
import { ReactComponent as Theme } from "../images/theme.svg";

// setting dark/ light toggle
function Themes() {
  const [darkTheme, setDarkTheme] = useState(false);

  const handleClick = () => {
    setDarkTheme(!darkTheme);
  };

  useEffect(() => {
    let elements = document.getElementsByClassName("app");
    if (darkTheme === true) {
      // since getElementsByClassName returns an array(even there's only one element with the class, set the )
      elements[0].classList.add("darkmode");
    } else {
      elements[0].classList.remove("darkmode");
    }
  });

  return (
    <>
      <button className="icon-theme" onClick={handleClick}>
        {darkTheme ? <Theme className="light" /> : <Theme className="dark" />}
      </button>
    </>
  );
}

export default Themes;

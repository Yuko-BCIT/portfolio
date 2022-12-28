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
      <span className="icon-theme" onClick={ handleClick }>{darkTheme ? <Theme className="sun" /> : <Theme className="moon" />}</span>
    </>
  );
}

export default Themes;

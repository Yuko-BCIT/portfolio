import { useLocation } from 'react-router-dom';
import { getYear } from "../utilities/getYear";

function Footer() {

  const location = useLocation().pathname;

  /*

   className={ `{<PageAbout /> === "active"} ? "footer-about" : null` }

  */

  return (
    <footer className={location === '/about' ? 'footer-about' : null}  >
      { console.log(location) }
      <p>Yuko Web Works &copy;{getYear()}</p>
    </footer>
  );
};

export default Footer;

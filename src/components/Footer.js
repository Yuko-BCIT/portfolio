import { useLocation } from 'react-router-dom';
import { getYear } from "../utilities/getYear";

function Footer() {

  const location = useLocation().pathname;

  return (
    <footer className={location === '/' ? 'footer-about' : null}  >
      <p>Yuko Web Works &copy;{getYear()}</p>
    </footer>
  );
};

export default Footer;

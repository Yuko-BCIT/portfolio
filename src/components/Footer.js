import { Link } from "react-router-dom";
import { getYear } from "../utilities/getYear";
import ScrollButton from "./ScrollButton";

function Footer() {
  return (
    <footer>
      <Link to="/" tabIndex={0}>
      <p>Yuko Web Works &copy;{getYear()}</p>
      </Link>
      <ScrollButton />
    </footer>
  );
};

export default Footer;

import { getYear } from "../utilities/getYear";

function Footer() {
  return (
    <footer>
      <p>Yuko Web Works &copy;{getYear()}</p>
    </footer>
  );
};

export default Footer;

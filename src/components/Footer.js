import { getYear } from "../utilities/getYear";

const Footer = () => {
  return (
    <footer>
      <p>Yuko Web Works &copy;{getYear()}</p>
    </footer>
  );
};

export default Footer;

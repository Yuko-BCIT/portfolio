import { ReactComponent as Logol } from "../images/logo.svg";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <div>
      <Link to="/">
        <Logol className="logo-main" />
      </Link>
    </div>
  );
}

export default Logo;

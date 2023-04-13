import { ReactComponent as Logol } from "../images/logo.svg";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <>
    {/* logo under 1000px screen width */}
      <Link to="/">
        <Logol className="logo-main" />
      </Link>
    </>
  );
}

export default Logo;

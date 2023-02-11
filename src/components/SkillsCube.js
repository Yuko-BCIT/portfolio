import { ReactComponent as PHP } from "../images/php.svg";
import { ReactComponent as HTML } from "../images/html.svg";
import { ReactComponent as CSS } from "../images/css.svg";
import { ReactComponent as JS } from "../images/js.svg";
import { ReactComponent as React } from "../images/react.svg";
import { ReactComponent as Wordpress } from "../images/wordpress.svg";
import { NavLink } from "react-router-dom";

function Skills() {
  return (
    //   rotating cube leads to works page
    <div className="cube">
      <NavLink to="/works">
        <div className="cube-spinner">
          <div className="face1">
            <Wordpress />
          </div>
          <div className="face2">
            <CSS />
          </div>
          <div className="face3">
            <JS />
          </div>
          <div className="face4">
            <React />
          </div>
          <div className="face5">
            <PHP />
          </div>
          <div className="face6">
            <HTML />
          </div>
        </div>
      </NavLink>
    </div>
  );
}

export default Skills;

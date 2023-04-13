import { ReactComponent as PHP } from "../images/php.svg";
import { ReactComponent as HTML } from "../images/html.svg";
import { ReactComponent as CSS } from "../images/css.svg";
import { ReactComponent as JS } from "../images/js.svg";
import { ReactComponent as React } from "../images/react.svg";
import { ReactComponent as Wordpress } from "../images/wordpress.svg";
import { NavLink } from "react-router-dom";

function Skills() {
  // skills section on Home
  return (
    <>
      <ul className="tech-list">
        <li>React</li>
        <li>JavaScript</li>
        <li>API</li>
        <li>Redux</li>
        <li>jQuery</li>
        <li>PHP</li>
        <li>MySQL</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>Sass</li>
        <li>Bootstrap</li>
      </ul>

      {/* rotating skills cube */}
      <NavLink to="/works" tabIndex={0}>
        <div className="cube">
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
        </div>
      </NavLink>

      <ul className="tech-list">
        <li>npm</li>
        <li>gulp</li>
        <li>Git</li>
        <li>GitHub</li>
        <li>Photoshop</li>
        <li>Adobe XD</li>
        <li>WordPress</li>
        <li>WooCommerce</li>
        <li>Shopify</li>
      </ul>
    </>
  );
}

export default Skills;

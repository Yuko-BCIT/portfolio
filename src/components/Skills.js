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
      <div className="tech-list">
        <span>React</span>
        <span>JavaScript</span>
        <span>API</span>
        <span>Redux</span>
        <span>jQuery</span>
        <span>PHP</span>
        <span>MySQL</span>
        <span>HTML</span>
        <span>CSS</span>
        <span>Sass</span>
        <span>Bootstrap</span>
      </div>

      {/* rotating skills cube */}
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

      <div className="tech-list">
        <span>npm</span>
        <span>gulp</span>
        <span>Git</span>
        <span>GitHub</span>
        <span>Photoshop</span>
        <span>Adobe XD</span>
        <span>WordPress</span>
        <span>WooCommerce</span>
        <span>Shopify</span>
      </div>
    </>
  );
}

export default Skills;

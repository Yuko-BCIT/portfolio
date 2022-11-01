import highlow from "../images/highlow.png";

import { ReactComponent as Html } from "../images/html.svg";
import { ReactComponent as Css } from "../images/css.svg";
import { ReactComponent as Js } from "../images/js.svg";
import { ReactComponent as Bootstrap } from "../images/bootstrap.svg";
import { ReactComponent as Jquery } from "../images/jquery.svg";

function PageWorkGame() {

  return (
    <main className="work-details">
        <h1>JavaScript Game</h1>
      <section>
        <h2>High Low</h2>
        <figure>
          <img src={ highlow } alt="screen shot of a game website" />

        </figure>

        <article>
          <h3>Main tools</h3>
      <div>
        <Html className="icon-tool" />
        <Css className="icon-tool" />
        <Js className="icon-tool" />
        <Bootstrap className="icon-tool" />
        <Jquery className="icon-tool" />
      </div>
      </article>
      </section>
    </main>
  );
};

export default PageWorkGame;

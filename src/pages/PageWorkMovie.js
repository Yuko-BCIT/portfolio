import movie from "../images/movie.png";
import { ReactComponent as Js } from "../images/js.svg";
import { ReactComponent as React } from "../images/react.svg";
import { ReactComponent as Xd } from "../images/xd.svg";
import { ReactComponent as Redux } from "../images/redux.svg";
import { ReactComponent as Ps } from "../images/ps.svg";

function PageWorkMovie() {
  return (
    <main>
      <h1>React App</h1>
      <section>
        <h2>Preview the Movie Database</h2>
        <figure>
          <img src={movie} alt="screen shot of a movie database website" />
        </figure>

        <article>
          <h3>Main tools</h3>

          <div>
            <React className="icon-tool" />
            <Xd className="icon-tool" />
            <Redux className="icon-tool" />
            <Ps className="icon-tool" />
          </div>
        </article>
      </section>

      <section>
        <h2>The project</h2>
        <article>
          <h3>Overview</h3>
        <p>Preview is a movie database React App. この作品は、リアクトを使った初めてのアプリなので、全部自分でやって理解を深めるためにソロで挑みました。ジャバスクリプトとは全く違うのに戸惑い、とても大変でしたが先生やクラスメートの助けを借りて納得のいく作品に仕上げることができました。</p>
        </article>

        <article>
          <h3>Design</h3>
          <p>まずAdobe XD を使って  wireframe をつくり、サイトの構造とページ構成を考えました。モバイルファーストで作りはじめ、そのあとデスクトップに移行しました。そのあとフォトショップを使い実際に映画のポスターを入れ、色をつけ、完成したサイトのイメージができたところで、再びXDを使い、今度はサイトの動作がどうなるかをプロトタイプで作りました。</p>
          <div className="external-links">
            <a className="button" href="">XD wireframe</a>
            <a className="button" href="">XD prototype</a>
          </div>
        </article>

        <article>
          <h3>Development</h3>
          <p></p>
        </article>

        <article>
          <h3>Takeaways</h3>
          <p></p>
        </article>


      </section>

      <div className="external-links">
            <a className="button single-work-button" href="">Live Site</a>
            <a className="button single-work-button" href="">GitHub</a>
          </div>
    </main>
  );
}

export default PageWorkMovie;

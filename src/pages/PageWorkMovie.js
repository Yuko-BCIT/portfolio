import movie from "../images/movie.png";
import { ReactComponent as React } from "../images/react.svg";
import { ReactComponent as Xd } from "../images/xd.svg";
import { ReactComponent as Redux } from "../images/redux.svg";

function PageWorkMovie() {
  return (
    <main className="work-details">
      <h1>React App</h1>
      <section>
        <h2>Preview the Movie Database</h2>
        <figure>
          <img src={ movie } alt="screen shot of a movie database website" />
        </figure>

        <article>
          <h3>Main tools</h3>

          <div>
            <React className="icon-tool" />
            <Xd className="icon-tool" />
            <Redux className="icon-tool" />
          </div>
        </article>
      </section>

      <section>
        <h2>The project</h2>
        <article>
          <h3>Overview</h3>
        <p>Preview is a movie database React App. この作品は、リアクトを使った初めてのアプリでした。previous intake の生徒が、大変な作業なのでグループでやった方が良いが、リアクトを全くかかないで終わってしまった生徒もいたと聞き、リアクトを学びたかった私は全部自分でやって理解を深めるためにソロで挑みました。ジャバスクリプトとかなり違うのに戸惑い、一人で始めたことで「大変な事に足をつっこんでしまった」、と焦り、果たして仕上げられるのか不安でしたが先生やクラスメートの助けを借りて納得のいく作品に仕上げることができました。</p>
        </article>

        <article>
          <h3>Design</h3>
          <p>デザインに時間と労力を注ぎ込んだので、自分の作品をドロップしたくなかったのもソロで挑んだ理由のひとつです。まずAdobe XD を使ってwireframe をつくり、サイトの構造とページ構成を考えました。モバイルファーストで作りはじめ、そのあとデスクトップに移行しました。そのあとインタラクティブ・プロトタイプに変換し実際に映画のポスターを入れ、色をつけ、完成したサイトのイメージができたところで、ナビゲーションやボタンをクリックしたらどこへ飛ぶかを再現しました。</p>
          <div className="external-links">
            <a className="button" href="https://xd.adobe.com/view/8bcd39d0-15d3-445d-9493-72215eb1d95b-de9e/">XD wireframe</a>
            <a className="button" href="https://xd.adobe.com/view/6b7a9b19-7cbc-433d-b27b-1c58bfb77296-3e29/">XD prototype</a>
          </div>
        </article>

        <article>
          <h3>Development</h3>
          <p>Create React Appを使い、まずヘッダー、フッター、そしてページごとにコンポーネンツを作った。そして、TMDBからAPIで映画の情報を引っ張ってきてポスター、概要、評価などを表示。そしてお気に入りに追加して、クライアントサイドに情報が保存されるようにReduxを導入し、クッキーが削除されるまでお気に入りに残るようにした。SASSでデザインを作っていく中でモックアップとは少し変えてみたくなり、デザインを少しアレンジしましたが、実物の方が気に入っています。</p>
        </article>

        <article>
          <h3>Takeaways</h3>
          <p>ホームページのコンポーネントがコンテンツヘビーになってしまい、コードがとても長くなってしまったが、小さいコンテンツに分けようとするとサイトが壊れてしまったため放置。もっと知識が増えたらコンポーネンツに小分けする予定です。デスクトップ版から作りはじめてしまったので、画面を縮小すると画面からコンテンツがあふれだし、直すのに苦労した。モバイルファーストという言葉の重みを実感し、経験を活かし、次からモバイルを先に作ろうと決心しました。ソロでやりましたが、全部のタスクを自分でやる経験ができたので、リアクトの理解を深められてよかったですし、やりきった自分を誇りに思います。</p>
        </article>

      </section>

      <div className="external-links">
            <a className="button single-work-button" href="https://yukowebworks.com/movie-database">Live Site</a>
            <a className="button single-work-button" href="">GitHub</a>
          </div>
    </main>
  );
}

export default PageWorkMovie;

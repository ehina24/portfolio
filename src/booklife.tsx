import { Link } from "react-router-dom";
import booklife_thumbnail from './assets/img/booklife_thumbnail.svg';
import booklife_home from './assets/img/booklife_home.png';
import booklife_explanation from './assets/img/booklife_explanation.png';
import './css/works.css';

function Booklife(){
    return(
        <>
        <div className="booklifePageWrap workDetailPage">
            <Link to="/"><button className="backBtn">Back</button></Link>
            <div className="workWrap">
                <img src={booklife_thumbnail} alt="booklifeサムネイル" />
                <div className="workInformation">
                    <h1>Booklife</h1>
                    <p className="catchPhrase">中高生の読書週間を育てるサポートサイト</p>
                    <p className="season">1年後期個人制作</p>
                    <h2>使用技術</h2>
                    <p>HTML・CSS・JavaScript</p>
                    <h2>役割</h2>
                    <p>企画・サイトデザイン・コーディング・プレゼン</p>
                    <a href="https://book-life-five.vercel.app/" target="blank"><button className="siteBtn">サイトを見る</button></a>
                </div>
            </div>
            <div className="workReviewWrap">
                <section className="reviewMain">
                    <div className="reviewText">
                        <div className="reviewTitle">
                            <span>01</span>
                            <h3>作品概要</h3>
                        </div>
                        <p>読書離れしている人が多い中高生が読書を習慣化するのをサポートするサイトです。</p>
                        <p>毎日目標ページ量を決め、読んだ量を記録します。毎日読んでいくごとに記録が溜まっていくので
                            自分の努力が目に見える形で残ります。読書をすることで本を読むことの楽しみや言葉の意味を理解・習得し
                            将来社会に求められる人材になることを目標に考えています。</p>
                    </div>
                        <img src={booklife_home} alt="booklifeホーム画面" className="webLarge"/>
                </section>
                <div className="reviewGrid">
                    <section className="reviewCard">
                        <div className="reviewText">
                            <div className="reviewTitle">
                                <span>02</span>
                                <h3>工夫した点-1</h3>
                            </div>
                            <h4>より心地よく<br/>感じられるデザイン</h4>
                            <p>全体を落ち着いた配色やデザインで統一し、
                                読書の雰囲気を感じられるサイトを目指しました。
                            </p>
                        </div>
                        <img src={booklife_home} alt="booklifeホーム画面" className="webSmall"/>
                    </section>
                    <section className="reviewCard">
                        <div className="reviewText">
                            <div className="reviewTitle">
                                <span>03</span>
                                <h3>工夫した点-2</h3>
                            </div>
                            <h4>方眼用紙の<br/>ようなデザイン</h4>
                            <p>一文字ずつ枠で囲むことで、まるで方眼用紙に
                                文字を書いているかのようなデザインに仕上げました。
                            </p>
                        </div>
                        <img src={booklife_explanation} alt="booklife説明画面" className="webSmall"/>
                    </section>
                </div>
                <div className="reviewGrid">
                    <section className="reviewCard">
                        <div className="reviewText">
                            <div className="reviewTitle">
                                <span>04</span>
                                <h3>課題・反省点</h3>
                            </div>
                            <p>レスポンシブ対応が十分にできておらず、画面サイズが変わると
                                文字やレイアウトが崩れてしまう部分がありました。
                                今後は複数のデバイスで使うことを想定して設計を進めていきたいです。
                            </p>
                        </div>
                    </section>
                    <section className="reviewCard">
                        <div className="reviewText">
                            <div className="reviewTitle">
                                <span>05</span>
                                <h3>振り返り</h3>
                            </div>
                            <p>サイトのコンセプトに合わせたデザインを追求しながら、楽しく
                                取り組むことができました。一方でレスポンシブ対応の難しさを実感し、
                                見た目だけでなくデバイスに応じた使いやすさを考慮する重要性を学びました。
                                今後はデザイン性と実用性を両立したサイト制作を目指し、レスポンシブを含む実装力を高めていきたいです。
                            </p>
                        </div>
                    </section>
                </div>

            </div>

            <footer>
                <p>&copy;2026Hina's Portfolio</p>
            </footer>

        </div>
        </>
    )
}
export default Booklife
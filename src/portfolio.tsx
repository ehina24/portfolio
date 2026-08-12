import { Link } from "react-router-dom";
import portfolio_thumbnail from './assets/img/portfolio_thumbnail.svg';
import portfolio_home from './assets/img/portfolio_home.png';
import portfolio_layout from './assets/img/portfolio_layout.png';
import './css/works.css';

function Portfolio(){
    return(
        <>
        <div className="portfolioPageWrap workDetailPage">
            <Link to="/"><button className="backBtn">Back</button></Link>
            <div className="workWrap">
                <img src={portfolio_thumbnail} alt="ポートフォリオサムネイル" />
                <div className="workInformation">
                    <h1>Hina's Portfolio</h1>
                    <p className="catchPhrase">私の今までの作品・私自身についてまとめたポートフォリオ</p>
                    <p className="season">3年前期個人作品</p>
                    <h2>使用技術</h2>
                    <p>React・HTML・CSS・JavaScript</p>
                    <h2>役割</h2>
                    <p>企画・サイトデザイン・コーディング</p>
                    <a href="https://portfolio-hazel-beta-33.vercel.app/" target="blank"><button className="siteBtn">サイトを見る</button></a>
                </div>
            </div>
            <div className="workReviewWrap">
                <section className="reviewMain">
                    <div className="reviewText">
                        <div className="reviewTitle">
                            <span>01</span>
                            <h3>作品概要</h3>
                        </div>
                        <p>これまでに制作したWebサイトやWebアプリ、グラフィック物をまとめたポートフォリオサイトです。</p>
                        <p>専門学校に入学してからの個人作品からチーム制作まで、これまでの制作実績と取り組みを一覧で紹介しています。</p>
                    </div>
                        <img src={portfolio_home} alt="ポートフォリオホーム画面" className="webLarge"/>
                </section>
                <div className="reviewGrid">
                    <section className="reviewCard">
                        <div className="reviewText">
                            <div className="reviewTitle">
                                <span>02</span>
                                <h3>工夫した点-1</h3>
                            </div>
                            <h4>誕生月の紫陽花を<br/>モチーフにデザイン</h4>
                            <p>誕生月である紫陽花をテーマに配色や世界観を統一し、
                                作品だけでなく自分らしさも伝わるWebサイトを意識しました。
                            </p>
                        </div>
                        <img src={portfolio_home} alt="ポートフォリオホーム画面" className="webSmall"/>
                    </section>
                    <section className="reviewCard">
                        <div className="reviewText">
                            <div className="reviewTitle">
                                <span>03</span>
                                <h3>工夫した点-2</h3>
                            </div>
                            <h4>カード型レイアウトで<br/>情報が見やすい構成</h4>
                            <p>コンテンツごとにカード型で整理することで、ユーザーが
                                必要な情報を視覚的に把握しやすい画面構成を意識しました。
                            </p>
                        </div>
                        <img src={portfolio_layout} alt="ポートフォリオレイアウト画面" className="webSmall"/>
                    </section>
                </div>
                <div className="reviewGrid">
                    <section className="reviewCard">
                        <div className="reviewText">
                            <div className="reviewTitle">
                                <span>04</span>
                                <h3>課題・反省点</h3>
                            </div>
                            <p>ポートフォリオの制作開始が遅くなってしまったため、スケジュールに余裕がなく、細かなデザインや
                                機能面まで十分にこだわり切ることができませんでした。今後は計画的に制作を進めることで細部まで
                                丁寧に作り込み完成度の高い作品にできるよう改善していきたいです。
                            </p>
                        </div>
                    </section>
                    <section className="reviewCard">
                        <div className="reviewText">
                            <div className="reviewTitle">
                                <span>05</span>
                                <h3>振り返り</h3>
                            </div>
                            <p>これまでに制作した作品を振り返りながら、自分の成長や学んできたことを改めて整理することができました。
                                また作品ごとに工夫点や反省点をまとめることで自分の得意なこと・今後の課題を再確認できる良い機会にも
                                なりました。今後も新しい技術や表現方法を積極的に学び、より良い作品を制作していきたいです。
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
export default Portfolio
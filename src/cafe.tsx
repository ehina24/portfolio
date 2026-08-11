import { Link } from "react-router-dom";
import cafe_thumbnail from './assets/img/cafe_thumbnail.svg';
import cafe_home from './assets/img/cafe_home.png';
import cafe_order from './assets/img/cafe_order.png';
import cafe_page_link from './assets/video/cafe_page_link.mp4'
import './css/works.css';

function Cafe(){
    return(
        <>
        <div className="cafePageWrap workDetailPage">
            <Link to="/"><button className="backBtn">Back</button></Link>
            <div className="workWrap">
                <img src={cafe_thumbnail} alt="カフェサムネイル"/>
                <div className="workInformation">
                    <h1>Personally Cafe</h1>
                    <p className="catchPhrase">「推し活」とコーヒーを掛け合わせたカフェサイト</p>
                    <p className="season">1年前期個人制作</p>
                    <h2>使用技術</h2>
                    <p>HTML・CSS</p>
                    <h2>役割</h2>
                    <p>企画・サイトデザイン・コーディング・プレゼン</p>
                    <a href="https://personallycafe.vercel.app/" target="blank"><button className="siteBtn">サイトを見る</button></a>
                </div>
            </div>
            <div className="workReviewWrap">
                <section className="reviewMain">
                    <div className="reviewText">
                        <div className="reviewTitle">
                            <span>01</span>
                            <h3>作品概要</h3>
                        </div>
                        <p>「推し活」とコーヒーを掛け合わせたカフェサイトです。</p>
                        <p>コーヒーの甘さや苦さを“推し”の性格やイメージに合わせてカスタマイズできる仕様にすることで、
                            推し活をより楽しめるコンセプトにしました。カフェとしての魅力だけでなく、
                            自分だけの“推しドリンク”を作る体験を通して、ユーザーが楽しめるサイトを目指して制作しました。</p>
                    </div>
                        <img src={cafe_home} alt="カフェホーム画面" className="webLarge"/>
                </section>
                <div className="reviewGrid">
                    <section className="reviewCard">
                        <div className="reviewText">
                            <div className="reviewTitle">
                                <span>02</span>
                                <h3>工夫した点-1</h3>
                            </div>
                            <h4>ページ内リンクによる<br/>スムーズな動線設計</h4>
                            <p>ページ内リンクを使用することで、ユーザーがスムーズに
                                ストレスなく閲覧できるサイト構成を意識しました。
                            </p>
                        </div>
                        <video src={cafe_page_link}
                                autoPlay loop muted playsInline className="webSmall"/>
                    </section>
                    <section className="reviewCard">
                        <div className="reviewText">
                            <div className="reviewTitle">
                                <span>03</span>
                                <h3>工夫した点-2</h3>
                            </div>
                            <h4>推しをイメージして<br/>コーヒーカスタマイズ</h4>
                            <p>自分の推しを頭にイメージしながら、
                                苦さや甘さを調整、トッピングをしてコーヒーを作ることができます。
                            </p>
                        </div>
                        <img src={cafe_order} alt="カフェオーダー画面" className="webSmall"/>
                    </section>
                </div>
                <div className="reviewGrid">
                    <section className="reviewCard">
                        <div className="reviewText">
                            <div className="reviewTitle">
                                <span>04</span>
                                <h3>課題・反省点</h3>
                            </div>
                            <p>ナビバーの背景色が未設定だったため、スクロール時にコンテンツと
                                重なって文字の視認性が低下する点がありました。デザイン性だけでなく
                                実用的な視認性を考慮し、ユーザー視点に立ったUI設計の重要さを学びました。
                            </p>
                        </div>
                    </section>
                    <section className="reviewCard">
                        <div className="reviewText">
                            <div className="reviewTitle">
                                <span>05</span>
                                <h3>振り返り</h3>
                            </div>
                            <p>自分の好きな「推し活」とカフェを組み合わせた作品を制作でき、
                                とてもいい経験になりました。専門学校に入学してから初めての
                                作品なので至らないところも多くありますが、一つの作品として
                                最後まで完成させることができて達成感を感じています。
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
export default Cafe
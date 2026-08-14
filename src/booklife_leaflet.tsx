import { Link } from "react-router-dom";
import booklife_leaflet from './assets/img/booklife_leaflet.jpeg';
import leaflet from './assets/pdf/booklife_leaflet.pdf';
import './css/works.css';

function Booklifeleaflet(){
    return(
        <>
        <div className="calenderPageWrap workDetailPage">
            <Link to="/"><button className="backBtn">Back</button></Link>
            <div className="workWrap">
                <img src={booklife_leaflet} alt="booklifeリーフレット" className="graphicWork"/>
                <div className="workInformation">
                    <h1>Booklife チラシ</h1>
                    <p className="season">1年後期個人制作</p>
                    <h2>役割</h2>
                    <p>デザイン</p>
                    <a href={leaflet} target="blank" rel="noopener noreferrer"><button className="siteBtn">サイトを見る</button></a>
                </div>
            </div>
            <div className="workReviewWrap">
                <section className="reviewMain">
                    <div className="reviewText">
                        <div className="reviewTitle">
                            <span>01</span>
                            <h3>作品概要</h3>
                        </div>
                        <p>1年後期で制作した「Booklife」のチラシです。</p>
                        <p>Booklifeがどのようなサービスなのかを分かりやすく伝えるためのものです。</p>
                    </div>
                </section>
                <div className="reviewGrid">
                    <section className="reviewCard">
                        <div className="reviewText">
                            <div className="reviewTitle">
                                <span>02</span>
                                <h3>デザインコンセプト</h3>
                            </div>
                            <h4>一冊のチラシを<br/>一冊の本のように</h4>
                            <p>Booklifeが「読書を習慣化するためのサービス」であることから、
                                本そのものをイメージしたチラシを制作しました。チラシを見た人に
                                読書を連想してもらえるよう、縦書きの文字やページ数など、本のデザイン
                                要素を取り入れています。チラシ全体を一冊の本のように見せることで、Booklifeのコンセプトが視覚的に伝わるデザインを目指しました。
                            </p>
                        </div>
                        {/* <video src={cafe_page_link}
                                autoPlay loop muted playsInline className="webSmall"/> */}
                    </section>
                    <section className="reviewCard">
                        <div className="reviewText">
                            <div className="reviewTitle">
                                <span>03</span>
                                <h3>工夫した点</h3>
                            </div>
                            <h4>本らしさを<br/>感じさせるデザイン</h4>
                            <p>本をイメージしたデザインにするため、文字を縦書きにし、
                                ページ数を記載することで実際の本のような雰囲気を表現しました。
                                また、情報をただ並べるのではなく、本のページをめくるように内容を
                                読み進められる構成を意識し、Booklifeの特徴が自然に伝わるよう工夫しました。
                            </p>
                        </div>
                        {/* <img src={cafe_order} alt="カフェオーダー画面" className="webSmall"/> */}
                    </section>
                </div>
                <div className="reviewGrid">
                    <section className="reviewCard">
                        <div className="reviewText">
                            <div className="reviewTitle">
                                <span>04</span>
                                <h3>課題・反省点</h3>
                            </div>
                            <p>本らしさを表現することを重視したことで、通常のチラシとは異なるレイアウトになり、
                                情報の配置や文字の大きさを調整することに難しさを感じました。デザインの雰囲気を
                                保ちながら、初めて見る人にも情報が分かりやすく伝わるよう、文字の大きさや余白など
                                をより細かく調整する必要があると感じました
                            </p>
                        </div>
                    </section>
                    <section className="reviewCard">
                        <div className="reviewText">
                            <div className="reviewTitle">
                                <span>05</span>
                                <h3>振り返り</h3>
                            </div>
                            <p>今回の制作では、Booklifeの「読書」というテーマから本そのものをデザインのモチーフとして取り入れることで、
                                コンセプトを視覚的に表現することができました。縦書きやページ数など、身近な本の要素を取り入れることで、
                                デザインの細かな工夫によって作品の印象を変えられることを学びました。今後も制作物のテーマや目的から発想を広げ、
                                見る人にコンセプトが伝わるデザインを考えていきたいです。
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
export default Booklifeleaflet
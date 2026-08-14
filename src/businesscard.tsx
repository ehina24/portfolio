import { Link } from "react-router-dom";
import business_card_front from './assets/img/business_card_front.png'
import business_card_back from './assets/img/business_card_back.png';
import business_card from './assets/pdf/business_card.pdf';
import './css/works.css';

function Businesscard(){
    return(
        <>
        <div className="businesscardPageWrap workDetailPage">
            <Link to="/"><button className="backBtn">Back</button></Link>
            <div className="workWrap">
                <div className="cardImgWrap">
                    <img src={business_card_front} alt="名刺表" className="graphicWork"/>
                    <img src={business_card_back} alt="名刺裏" className="graphicWork" />
                </div>
                <div className="workInformation">
                    <h1>名刺</h1>
                    <p className="season">1年後期授業制作</p>
                    <h2>役割</h2>
                    <p>デザイン</p>
                    <a href={business_card} target="blank" rel="noopener noreferrer"><button className="siteBtn">サイトを見る</button></a>
                </div>
            </div>
            <div className="workReviewWrap">
                <section className="reviewMain">
                    <div className="reviewText">
                        <div className="reviewTitle">
                            <span>01</span>
                            <h3>作品概要</h3>
                        </div>
                        <p>自分のことを表現する名刺です。</p>
                        <p>自分の名前や連絡先など必要な情報を整理しながら、
                            自分らしさが伝わるデザインを考え表面・裏面を制作しました。</p>
                    </div>
                </section>
                <div className="reviewGrid">
                    <section className="reviewCard">
                        <div className="reviewText">
                            <div className="reviewTitle">
                                <span>02</span>
                                <h3>デザインコンセプト</h3>
                            </div>
                            <h4>自分らしさを<br/>形にする名刺</h4>
                            <p>自分の雰囲気や好みをデザインに取り入れ、シンプルでありながら印象に残る名刺を目指しました。
                                色や文字、レイアウトを整理することで、必要な情報を見やすくしながら、
                                自分らしさも感じられるデザインになるよう意識しました。
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
                            <h4>情報を整理した<br/>見やすいレイアウト</h4>
                            <p>名前や連絡先などの情報が一目で分かるよう、情報の優先順位を考えながら
                                文字の大きさや配置を調整しました。また、表面と裏面で情報を整理し、
                                それぞれの役割が分かれるようにデザインしています。さらに、余白を十分に
                                取ることで情報が詰まった印象にならないようにし、すっきりとした見た目になるよう工夫しました。
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
                            <p>必要な情報をすべて入れようとすることで、レイアウトや情報量の調整に難しさを感じました。
                                特に、デザイン性を意識するほど情報が見づらくなってしまう場合があったため、見た目と
                                情報の分かりやすさを両立させることが課題だと感じました。
                                今後は、制作の初期段階で情報の優先順位を明確にし、より計画的にレイアウトを決めていきたいです。
                            </p>
                        </div>
                    </section>
                    <section className="reviewCard">
                        <div className="reviewText">
                            <div className="reviewTitle">
                                <span>05</span>
                                <h3>振り返り</h3>
                            </div>
                            <p>今回の制作を通して、限られたスペースの中で情報を整理し、自分らしさを表現することの難しさを学びました。
                                また、実際に使用することを想定してデザインすることで、見た目だけでなく情報の伝わりやすさも重要である
                                ことを学びました。今回学んだレイアウトや情報整理の考え方を、今後のグラフィック制作にも活かしていきたいです。
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
export default Businesscard
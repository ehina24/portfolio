import { Link } from "react-router-dom";
import calendar from './assets/img/calendar.svg';
import calender_pdf from './assets/pdf/calendar.pdf';
import './css/works.css';

function Calendar(){
    return(
        <>
        <div className="calenderPageWrap workDetailPage">
            <Link to="/"><button className="backBtn">Back</button></Link>
            <div className="workWrap">
                <img src={calendar} alt="カレンダー" className="graphicWork"/>
                <div className="workInformation">
                    <h1>カレンダー</h1>
                    <p className="season">1年後期授業制作</p>
                    <h2>役割</h2>
                    <p>デザイン</p>
                    <a href={calender_pdf} target="blank" rel="noopener noreferrer"><button className="siteBtn">サイトを見る</button></a>
                </div>
            </div>
            <div className="workReviewWrap">
                <section className="reviewMain">
                    <div className="reviewText">
                        <div className="reviewTitle">
                            <span>01</span>
                            <h3>作品概要</h3>
                        </div>
                        <p>1年生後期のIllustratorの授業で制作したカレンダーです。</p>
                        <p>誕生色と誕生花を使用し、12ヶ月分のカレンダーデザインを考え制作しました。</p>
                    </div>
                    <img src={calendar} alt="カレンダー" className="graphicWork"/>
                </section>
                <div className="reviewGrid">
                    <section className="reviewCard">
                        <div className="reviewText">
                            <div className="reviewTitle">
                                <span>02</span>
                                <h3>デザインコンセプト</h3>
                            </div>
                            <h4>色と花で楽しむ<br/>12ヶ月</h4>
                            <p>12ヶ月それぞれの誕生色と誕生花を取り入れ、月ごとに異なる雰囲気を楽しめる
                                カレンダーを制作しました。誕生色と誕生花の特徴を活かしながら、
                                全体として統一感のあるデザインにすることで、シンプルでスタイリッシュな
                                カレンダーを目指しました。
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
                            <h4>一輪一輪にこだわった<br/>花の表現</h4>
                            <p>12ヶ月それぞれの誕生花を一からトレースし、花の特徴を捉えた線画を
                                制作しました。線の太さや細かさを調整し、シンプルながらも花の個性が伝わるように意識しました。
                                また、誕生花のイラストに合わせて和名も記載することで、視覚だけでなく花そのものにも興味を持って
                                もらえるよう工夫しました。
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
                            <p>レイアウトは同じ構成で制作しましたが、月が進むにつれて月名や日付などの位置に
                                少しずつズレが生じてしまいました。12ヶ月分のデザインを統一するためには、各
                                要素の位置や間隔を細かく確認しながら制作することが重要だと改めて感じました。
                                今後は、基準となる位置を明確にし、各ページでレイアウトを確認しながら制作するよう意識したいです。
                            </p>
                        </div>
                    </section>
                    <section className="reviewCard">
                        <div className="reviewText">
                            <div className="reviewTitle">
                                <span>05</span>
                                <h3>振り返り</h3>
                            </div>
                            <p>12ヶ月分の誕生花を一から自分でトレースしたことで、
                                Illustratorのペンツールの操作が上達したと感じています。
                                花の細かな形を観察しながら線画を制作することで、Illustratorの扱いにも慣れることができました。
                                今回身につけた技術を、次回の制作にも活かしていきたいです。
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
export default Calendar
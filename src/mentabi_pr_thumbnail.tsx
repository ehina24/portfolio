import { Link } from "react-router-dom";
import mentabi_pr_thumbnail from './assets/img/mentabi_pr_thumbnail.jpg';
import mentabi_pr from './assets/pdf/mentabi_pr_thumbnail.pdf';
import './css/works.css';

function Mentabiprthumbnail(){
    return(
        <>
        <div className="calenderPageWrap workDetailPage">
            <Link to="/"><button className="backBtn">Back</button></Link>
            <div className="workWrap">
                <img src={mentabi_pr_thumbnail} alt="めんたびPRサムネイル" className="graphicWork"/>
                <div className="workInformation">
                    <h1>めんたびPR画像</h1>
                    <p className="season">2年後期授業制作</p>
                    <h2>役割</h2>
                    <p>デザイン</p>
                    <a href={mentabi_pr} target="blank" rel="noopener noreferrer"><button className="siteBtn">サイトを見る</button></a>
                </div>
            </div>
            <div className="workReviewWrap">
                <section className="reviewMain">
                    <div className="reviewText">
                        <div className="reviewTitle">
                            <span>01</span>
                            <h3>作品概要</h3>
                        </div>
                        <p>2年後期で制作した「めんたび」をPRする画像です。</p>
                        <p>和歌山ラーメンの魅力が伝わるよう、ラーメンをメインビジュアルに使用し制作しました。</p>
                    </div>
                </section>
                <div className="reviewGrid">
                    <section className="reviewCard">
                        <div className="reviewText">
                            <div className="reviewTitle">
                                <span>02</span>
                                <h3>デザインコンセプト</h3>
                            </div>
                            <h4>一杯のラーメンから広がる<br/>和歌山市の魅力</h4>
                            <p>和歌山ラーメンを大きく印象づけるデザインを目指しました。
                                ラーメンのどんぶりを右下に配置し、そこから麺や具材が飛び出すような構成にすることで、
                                動きのある楽しげなビジュアルを表現しました。ラーメンをきっかけに、和歌山市を楽しむ
                                「めんたび」のコンセプトが伝わるデザインを意識しています。
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
                            <h4>一から制作した<br/>ラーメンのビジュアル</h4>
                            <p>ラーメンのどんぶりから麺、チャーシューやネギなどの具材まで、
                                一つひとつ自分で制作しました。それぞれの形や質感を意識しながら制作し、
                                実際のラーメンらしさを感じられるよう工夫しています。
                                また、具材や麺をどんぶりから飛び出させることで、静止した画像の中にも動きや躍動感が生まれるようにしました。。
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
                            <p>ラーメンの具材を一から制作する中で、実物らしい質感や形を表現することに難しさを感じました。
                                特に、具材ごとの大きさや配置によって全体の印象が変わるため、自然に見せながらデザインと
                                して成立させることに苦戦しました。今後は、実物をよく観察して特徴を捉える力を身につけ、
                                より自然で完成度の高いビジュアルを制作できるようにしたいです。
                            </p>
                        </div>
                    </section>
                    <section className="reviewCard">
                        <div className="reviewText">
                            <div className="reviewTitle">
                                <span>05</span>
                                <h3>振り返り</h3>
                            </div>
                            <p>今回の制作では、ラーメンのどんぶりや具材、麺などを一から制作したことで、
                                Illustratorで形や質感を表現する技術を身につけることができました。
                                また、単純にラーメンを配置するだけではなく、具材を飛び出させることで動きを加えるなど、
                                構図によって見る人に与える印象を変えられることも学びました。今回身につけた制作技術や
                                構成力を、今後のグラフィック制作にも活かしていきたいです。
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
export default Mentabiprthumbnail
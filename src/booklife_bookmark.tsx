import { Link } from "react-router-dom";
import booklife_bookmark from './assets/img/booklife_bookmark_yellow.png'
import bookmark from './assets/pdf/bookmark.pdf';
import './css/works.css';

function Booklifebookmark(){
    return(
        <>
        <div className="calenderPageWrap workDetailPage">
            <Link to="/"><button className="backBtn">Back</button></Link>
            <div className="workWrap">
                <img src={booklife_bookmark} alt="booklife栞" className="graphicWork bookmark"/>
                <div className="workInformation">
                    <h1>Booklife 栞</h1>
                    <p className="season">1年後期個人制作</p>
                    <h2>役割</h2>
                    <p>デザイン</p>
                    <a href={bookmark} target="blank" rel="noopener noreferrer"><button className="siteBtn">サイトを見る</button></a>
                </div>
            </div>
            <div className="workReviewWrap">
                <section className="reviewMain">
                    <div className="reviewText">
                        <div className="reviewTitle">
                            <span>01</span>
                            <h3>作品概要</h3>
                        </div>
                        <p>1年後期で制作した「Booklife」の栞です。</p>
                        <p>本屋さんなどに置いてある栞をイメージし制作しました。</p>
                    </div>
                </section>
                <div className="reviewGrid">
                    <section className="reviewCard">
                        <div className="reviewText">
                            <div className="reviewTitle">
                                <span>02</span>
                                <h3>デザインコンセプト</h3>
                            </div>
                            <h4>本の背表紙を<br/>一枚の栞に</h4>
                            <p>Booklifeの「読書」というテーマから、本の背の部分をモチーフにした栞を制作しました。
                                本棚に並んだ本の背表紙をイメージし、栞を本に挟んだときにも本とのつながりを感じられる
                                デザインを目指しました。読書を邪魔しないよう、シンプルで落ち着いたデザインにまとめています。
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
                            <h4>本の背表紙をイメージした<br/>シンプルなデザイン</h4>
                            <p>本の背表紙にタイトルが書かれていることから、そのデザインを栞に取り入れました。
                                栞に配置する要素を考える中で、Booklifeのロゴをメインに使用し、
                                情報を詰め込みすぎずシンプルに仕上げました。また、本に挟んだときに馴染むよう、
                                栞単体だけでなく実際に使用する場面も意識してデザインしました。
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
                            <p>初めて栞を制作したため、限られたスペースにどのような要素を配置すればよいのか悩みました。
                                デザイン性を高めようとすると情報が増えてしまう一方で、要素を減らしすぎると物足りなく
                                感じるため、情報量のバランスを考えることに難しさを感じました。今後は、実際の使用場面や
                                サイズをより意識しながら、必要な情報とデザインのバランスを考えて制作したいです。
                            </p>
                        </div>
                    </section>
                    <section className="reviewCard">
                        <div className="reviewText">
                            <div className="reviewTitle">
                                <span>05</span>
                                <h3>振り返り</h3>
                            </div>
                            <p>今回初めて栞を制作したことで、Webサイトやチラシとは異なり、限られたスペースの中でデザインを
                                考える難しさを学びました。使用する要素を絞り、ロゴを中心にシンプルにまとめることで、少ない
                                要素でもコンセプトを表現できることを実感しました。今回学んだ情報整理や引き算の考え方を、
                                今後のグラフィック制作にも活かしていきたいです。
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
export default Booklifebookmark
import { Link } from "react-router-dom";
import mentabi_thumbnail from './assets/img/mentabi_thumbnail.svg';
import mentabi_home from './assets/img/mentabi_home.png';
import mentabi_diagnosis from './assets/img/mentabi_diagnosis.png';
import mentabi_ingenuity from './assets/img/mentabi_ingenuity.png';
import './css/works.css';

function Mentabi(){
    return(
        <>
        <div className="mentabiPageWrap workDetailPage">
            <Link to="/"><button className="backBtn">Back</button></Link>
            <div className="workWrap">
                <img src={mentabi_thumbnail} alt="めんたびサムネイル" />
                <div className="workInformation">
                    <h1>めんたび</h1>
                    <p className="catchPhrase">和歌山ラーメンをきっかけに、<br/>和歌山市を楽しむ体験型情報サイト</p>
                    <p className="season">2年後期個人制作</p>
                    <h2>使用技術</h2>
                    <p>HTML・CSS・JavaScript・PHP・MySQL</p>
                    <h2>役割</h2>
                    <p>企画・サイトデザイン・コーディング・プレゼン</p>
                    <a href="https://click.ecc.ac.jp/ecc/hendo/works/2/mentabi/" target="blank"><button className="siteBtn">サイトを見る</button></a>
                </div>
            </div>

            <div className="workReviewWrap">
                <section className="reviewMain">
                    <div className="reviewText">
                        <div className="reviewTitle">
                            <span>01</span>
                            <h3>作品概要</h3>
                        </div>
                        <p>和歌山ラーメンをきっかけに、和歌山市をより深く楽しんでもらうための体験型情報サイトです。</p>
                        <p>ユーザーは簡単な診断から自分に合った一杯を見つけ、店舗情報やマップを通して実際に食べ歩くことが
                            できます。スタンプラリー機能によって旅の達成感を高め、ラーメンの魅力と街の魅力を同時に味わえる
                            構成にしました。食を入り口に、和歌山市を歩いて知るきっかけをつくる “旅と食の案内役” を目指しています。</p>
                    </div>
                        <img src={mentabi_home} alt="めんたびホーム画面" className="app"/>
                </section>
                <div className="reviewGrid">
                    <section className="reviewCard">
                        <div className="reviewText">
                            <div className="reviewTitle">
                                <span>02</span>
                                <h3>工夫した点-1</h3>
                            </div>
                            <h4>店舗情報を直感的に<br/>理解できる地図表示</h4>
                            <p>住所を文字だけで表示するのではなく、Googleマップを埋め込むことで、
                                利用者が場所を直感的に把握できるようにしました。</p>
                        </div>
                        <img src={mentabi_ingenuity} alt="めんたびマップ画面" className="app"/>
                    </section>
                    <section className="reviewCard">
                        <div className="reviewText">
                            <div className="reviewTitle">
                                <span>03</span>
                                <h3>工夫した点-2</h3>
                            </div>
                            <h4>自分に合うラーメンを<br/>見つけられる診断機能</h4>
                            <p>簡単な質問に答えるだけで、ユーザーの好みに合った
                                ラーメンを提案する診断機能を実装しました。</p>
                        </div>
                        <img src={mentabi_diagnosis} alt="めんたび診断画面" className="app"/>
                    </section>
                </div>
                <div className="reviewGrid">
                    <section className="reviewCard">
                        <div className="reviewText">
                            <div className="reviewTitle">
                                <span>04</span>
                                <h3>課題・反省点</h3>
                            </div>
                            <p>データベース構築や登録処理の実装に時間がかかり、当初
                                予定していた機能まで実装できませんでした。今後は事前に工数を
                                見積もり、優先順位をつけて実装するようにしたいです。
                            </p>
                        </div>
                    </section>
                    <section className="reviewCard">
                        <div className="reviewText">
                            <div className="reviewTitle">
                                <span>05</span>
                                <h3>振り返り</h3>
                            </div>
                            <p>授業で学習したデータベースを活用したWebサイトを制作したいと思い、
                                この企画を考えました。実際に設計・実装を進める中で多くの難しさを
                                感じましたが、その分データベースやバックエンド処理への理解が深まり、
                                自分自身の成長を実感できる制作になりました。
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
export default Mentabi
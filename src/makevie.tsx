import { Link } from "react-router-dom";
import makevie_thumbnail from './assets/img/makevie_thumbnail.svg';
import makevie_home from './assets/img/makevie_home.png';
import makevie_mission from './assets/img/makevie_mission.png';
import makevie_virtual from './assets/img/makevie_virtual.png';
import './css/works.css';

function Makevie(){
    return(
        <>
        <div className="makeviePageWrap workDetailPage">
            <Link to="/"><button className="backBtn">Back</button></Link>
            <div className="workWrap">
                <img src={makevie_thumbnail} alt="Makevieサムネイル" />
                <div className="workInformation">
                    <h1>Makevie</h1>
                    <p className="catchPhrase">メイク初心者がメイクを動画で学べるサイト</p>
                    <p className="season">2年前期個人制作</p>
                    <h2>使用技術</h2>
                    <p>React・HTML・CSS・JavaScript</p>
                    <h2>役割</h2>
                    <p>企画・サイトデザイン・コーディング・プレゼン</p>
                    <a href="https://makevie.vercel.app/" target="blank"><button className="siteBtn">サイトを見る</button></a>
                </div>
            </div>
            <div className="workReviewWrap">
                <section className="reviewMain">
                    <div className="reviewText">
                        <div className="reviewTitle">
                            <span>01</span>
                            <h3>作品概要</h3>
                        </div>
                        <p>画像ではなく動画で顔のパーツごとにメイクを練習し、初心者でもメイクをマスターできることを目指した学習サイトです。</p>
                        <p>顔診断で自分に似合うメイクやコスメが分かり、バーチャルメイクで
                            気になるアイテムを試すことも可能。さらに、最新のコスメ情報もチェックできるなど、
                            メイク初心者にうれしい機能が充実しています。</p>
                    </div>
                        <img src={makevie_home} alt="makevieホーム画面" className="webLarge"/>
                </section>
                <div className="reviewGrid">
                    <section className="reviewCard">
                        <div className="reviewText">
                            <div className="reviewTitle">
                                <span>02</span>
                                <h3>工夫した点-1</h3>
                            </div>
                            <h4>部位別ステップ学習と<br/>直感的なカラー設計</h4>
                            <p>ユーザーが自分のペースで段階的にメイク技術を身につけられるよう
                                部位別で学習できる構成にしました。また、コンテンツを視覚的に
                                区別し直感的に操作できるUIを意識しました。
                            </p>
                        </div>
                        <img src={makevie_mission} alt="makevieミッション画面" className="webSmall"/>
                    </section>
                    <section className="reviewCard">
                        <div className="reviewText">
                            <div className="reviewTitle">
                                <span>03</span>
                                <h3>工夫した点-2</h3>
                            </div>
                            <h4>バーチャルで<br/>メイクを体験</h4>
                            <p>顔診断で出た結果や欲しかったコスメを
                                バーチャルで体験
                            </p>
                        </div>
                        <img src={makevie_virtual} alt="makevieバーチャル画面" className="webSmall"/>
                    </section>
                </div>
                <div className="reviewGrid">
                    <section className="reviewCard">
                        <div className="reviewText">
                            <div className="reviewTitle">
                                <span>04</span>
                                <h3>課題・反省点</h3>
                            </div>
                            <p>バーチャルメイク機能のカメラの起動や写真撮影機能までは実装することができましたが、
                                実際にメイクを施したようなフィルターを適用する機能までは実装できませんでした。
                                実現には画像処理や顔認識技術に関する知識が必要であることを実感したため、今後実装できるよう改善したいです。
                            </p>
                        </div>
                    </section>
                    <section className="reviewCard">
                        <div className="reviewText">
                            <div className="reviewTitle">
                                <span>05</span>
                                <h3>振り返り</h3>
                            </div>
                            <p>カメラを起動して写真を撮影する機能の実装は初めての経験だったため、思うように動作せず悩む場面も多くありました。
                                しかし、試行錯誤しながら実装を進めることで新しい知識や技術を学ぶことができ、自分自身の成長に繋がったと
                                感じています。
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
export default Makevie
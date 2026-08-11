import { Link } from "react-router-dom";
import counter_thumbnail from './assets/img/counter_thumbnail.svg';
import counter_home from './assets/img/counter_home.png';
import counter_grid from './assets/img/counter_grid.png';
import './css/works.css';

function Counter(){
    return(
        <>
        <div className="counterPageWrap workDetailPage">
            <Link to="/"><button className="backBtn">Back</button></Link>
            <div className="workWrap">
                <img src={counter_thumbnail} alt="カウンターカウンターサムネイル" />
                <div className="workInformation">
                    <h1>カウンターカウンター</h1>
                    <p className="catchPhrase">自分に優しくできた瞬間をカウントするカウンターアプリ</p>
                    <p className="season">2年後期チーム制作</p>
                    <h2>使用技術</h2>
                    <p>React・TypeScript・HTML・CSS</p>
                    <h2>役割</h2>
                    <p>企画・コーディング</p>
                    <a href="https://help-gaudi.vercel.app/logIn" target="blank"><button className="siteBtn">サイトを見る</button></a>
                </div>
            </div>
            <div className="workReviewWrap">
                <section className="reviewMain">
                    <div className="reviewText">
                        <div className="reviewTitle">
                            <span>01</span>
                            <h3>作品概要</h3>
                        </div>
                        <p>自分で自分を労ったり、優しくできた瞬間をカウントするカウンターアプリ。</p>
                        <p>自分に対する優しさをカウント・可視化することで、客観視の促進とユーザーの自己肯定感を
                            高く保ち、精神的な安定を図ります。</p>
                    </div>
                        <img src={counter_home} alt="カウンターホーム画面" className="app"/>
                </section>
                <div className="reviewGrid">
                    <section className="reviewCard">
                        <div className="reviewText">
                            <div className="reviewTitle">
                                <span>02</span>
                                <h3>工夫した点-1</h3>
                            </div>
                            <h4>レトロゲームの<br/>世界観を表現</h4>
                            <p>80年代〜90年代のゲーム画面をテーマにしていたため、
                                各デザイン要素をドット調でデザインしレトロゲームの世界観を表現しました。
                            </p>
                        </div>
                        <img src={counter_home} alt="カウンターホーム画面" className="app"/>
                    </section>
                    <section className="reviewCard">
                        <div className="reviewText">
                            <div className="reviewTitle">
                                <span>03</span>
                                <h3>工夫した点-2</h3>
                            </div>
                            <h4>グリッドで分割し<br/>レイアウトを工夫</h4>
                            <p>画面全体をグリッドで分割し、各要素の大きさや配置を調整
                                することで、整理されたレイアウトになるよう工夫しました。
                            </p>
                        </div>
                        <img src={counter_grid} alt="カウンターグリッド画面" className="app"/>
                    </section>
                </div>
                <div className="reviewGrid">
                    <section className="reviewCard">
                        <div className="reviewText">
                            <div className="reviewTitle">
                                <span>04</span>
                                <h3>課題・反省点</h3>
                            </div>
                            <p>画面をグリッドで分割し、その上にデザインした画像を配置していく制作手法は初めての挑戦だったため、
                                レイアウトの調整や作業の進め方に苦戦する場面がありました。その結果、効率的に作業を進められなかった
                                部分もあったため、今後は作業をスムーズに進められるよう改善したいです。
                            </p>
                        </div>
                    </section>
                    <section className="reviewCard">
                        <div className="reviewText">
                            <div className="reviewTitle">
                                <span>05</span>
                                <h3>振り返り</h3>
                            </div>
                            <p>初めてリーダーを担当し、意見調整や進行管理の難しさを実感しました。
                                制作を通じてチーム全体を把握して動かす経験ができ、リーダーの役割
                                や責任を学ぶことができました。技術力だけでなく、チーム運営やコミュニケーション
                                の大切さを実感できた貴重な体験です。
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
export default Counter
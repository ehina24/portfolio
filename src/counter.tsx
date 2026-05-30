import { Link } from "react-router-dom";
import counter_thumbnail from './assets/img/counter_thumbnail.svg';
import './css/works.css';

function Counter(){
    return(
        <>
        <div className="counterPageWrap">
            <Link to="/"><button className="backBtn">Back</button></Link>
            <div className="workWrap">
                <img src={counter_thumbnail} alt="カウンターカウンターサムネイル" />
                <div className="workInformation">
                    <h1>カウンターカウンター</h1>
                    <p className="season">2年後期チーム制作</p>
                    <h2>使用技術</h2>
                    <p>React・TypeScript・HTML・CSS</p>
                    <h2>役割</h2>
                    <p>企画・コーディング</p>
                    <a href="https://help-gaudi.vercel.app/logIn" target="blank"><button className="siteBtn">サイトを見る</button></a>
                </div>
            </div>
            <div className="workReviewWrap">
                <h3>作品概要</h3>
                <p>自分で自分を労ったり、優しくできた瞬間をカウントするカウンターアプリ。
                    自分に対する優しさをカウント・可視化することで、客観視の促進とユーザーの自己肯定感を
                    高く保ち、精神的な安定を図ります。
                </p>
                <h3>工夫した点</h3>
                <p>80~90年代のゲーム画面をテーマにしていたため、各デザイン要素をドット調でデザインしレトロゲーム
                    の世界観を表現しました。また、画面全体をグリッドで分割し、各要素の大きさや配置を調整することで
                    整理されたレイアウトになるよう工夫しました。
                </p>
                <h3>反省点</h3>
                <p>画面をグリッドで分割し、その上にデザインした画像を配置していく制作手法は初めての挑戦だったため、
                    レイアウトの調整や作業の進め方に苦戦する場面がありました。その結果、効率的に作業を進められなかった
                    部分もあったため、今後は作業をスムーズに進められるよう改善したいです。
                </p>
                <h3>振り返り</h3>
                <p>今回のチーム制作では、初めてリーダーを担当しました。これまでリーダーを務める機会があまりなかったため、
                    メンバーをまとめたり、意見が分かれた際に方向性を決定したりすることに苦労する場面もありました。
                    しかし、制作を進める中でチーム全体の状況を把握しながら進行管理を行う経験ができ、リーダーとしての役割や責任について学ぶことができました。
                    技術面だけでなく、コミュニケーションやチーム運営の大切さを実感できたため、自分にとって非常に
                    良い経験になったと感じています。
                </p>
            </div>

            <footer>
                <p>&copy;2026Hina's Portfolio</p>
            </footer>

        </div>
        </>
    )
}
export default Counter
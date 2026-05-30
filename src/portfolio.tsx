import { Link } from "react-router-dom";
import portfolio_thumbnail from './assets/img/portfolio_thumbnail.svg';
import './css/works.css';

function Portfolio(){
    return(
        <>
        <div className="portfolioPageWrap">
            <Link to="/"><button className="backBtn">Back</button></Link>
            <div className="workWrap">
                <img src={portfolio_thumbnail} alt="ポートフォリオサムネイル" />
                <div className="workInformation">
                    <h1>Hina's Portfolio</h1>
                    <p className="season">3年前期個人作品</p>
                    <h2>使用技術</h2>
                    <p>React・HTML・CSS・JavaScript</p>
                    <h2>役割</h2>
                    <p>企画・サイトデザイン・コーディング</p>
                    <a href="https://portfolio-hazel-beta-33.vercel.app/" target="blank"><button className="siteBtn">サイトを見る</button></a>
                </div>
            </div>
            <div className="workReviewWrap">
                <h3>作品概要</h3>
                <p>私の今までの作品・私自身についてをまとめたポートフォリオ。
                </p>
                <h3>工夫した点</h3>
                <p>自分自身を表現するポートフォリオサイトとして、誕生月の花である紫陽花をモチーフに取り入れ、
                    配色やデザイン全体に統一感を持たせました。作品だけでなく、自分らしさも伝わるサイトになる
                    よう意識しています。
                </p>
                <h3>反省点</h3>
                <p>ポートフォリオの制作開始が遅くなってしまったため、スケジュールに余裕がなく、細かなデザインや
                    機能面まで十分にこだわり切ることができませんでした。今後は計画的に制作を進めることで細部まで
                    丁寧に作り込み完成度の高い作品にできるよう改善していきたいです。
                </p>
                <h3>振り返り</h3>
                <p>これまでに制作した作品を振り返りながら、自分の成長や学んできたことを改めて整理することができました。
                    また作品ごとに工夫点や反省点をまとめることで自分の得意なこと・今後の課題を再確認できる良い機会にも
                    なりました。今後も新しい技術や表現方法を積極的に学び、より良い作品を制作していきたいです。
                </p>
            </div>

            <footer>
                <p>&copy;2026Hina's Portfolio</p>
            </footer>

        </div>
        </>
    )
}
export default Portfolio
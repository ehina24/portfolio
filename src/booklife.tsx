import { Link } from "react-router-dom";
import booklife_thumbnail from './assets/img/booklife_thumbnail.svg';
import './css/works.css';

function Booklife(){
    return(
        <>
        <div className="booklifePageWrap">
            <Link to="/"><button className="backBtn">Back</button></Link>
            <div className="workWrap">
                <img src={booklife_thumbnail} alt="booklifeサムネイル" />
                <div className="workInformation">
                    <h1>Booklife</h1>
                    <p className="season">1年後期個人制作</p>
                    <h2>使用技術</h2>
                    <p>HTML・CSS・JavaScript</p>
                    <h2>役割</h2>
                    <p>企画・サイトデザイン・コーディング・プレゼン</p>
                    <a href="https://book-life-five.vercel.app/" target="blank"><button className="siteBtn">サイトを見る</button></a>
                </div>
            </div>
            <div className="workReviewWrap">
                <h3>作品概要</h3>
                <p>この作品は読書離れしている人が多い中高生が読書を習慣化するのをサポートする物です。
                    毎日目標ページ量を決め、読んだ量を記録します。毎日読んでいくごとに記録が溜まっていくので
                    自分の努力が目に見える形で残ります。読書をすることで本を読むことの楽しみや言葉の意味を理解・習得し
                    将来社会に求められる人材になることを目標に考えています。
                </p>
                <h3>工夫した点</h3>
                <p>本を読む時間をより心地よく感じられるよう、全体を落ち着いた配色やデザインで統一し、
                    読書の雰囲気を感じられるサイトを目指しました。
                    アプリの説明部分では、一文字ずつ枠で囲むことで、方眼用紙に文字を書いているようなデザインを表現しました。
                </p>
                <h3>反省点</h3>
                <p>レスポンシブ対応が十分にできておらず、画面サイズが変わると文字やレイアウトが崩れてしまう
                    部分がありました。今後は複数のデバイスで使うことを想定して設計を進めていきたいです。
                </p>
                <h3>振り返り</h3>
                <p>今回の制作では、サイトのイメージにあったデザインを考えながら制作することができ、とても楽しく取り組むことができました。
                    一方でレスポンシブ対応という課題も見つかり、デザインだけでなく使いやすさも考慮したサイト設計の重要性を学びました。
                    今後はデザインと使いやすさ両方を兼ね備えたサイト制作ができるよう技術力を高めていきたいです。
                </p>
            </div>

            <footer>
                <p>&copy;2026Hina's Portfolio</p>
            </footer>

        </div>
        </>
    )
}
export default Booklife
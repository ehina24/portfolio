import { Link } from "react-router-dom";
import cafe_thumbnail from './assets/img/cafe_thumbnail.svg';
import './css/works.css';

function Cafe(){
    return(
        <>
        <div className="cafePageWrap">
            <Link to="/"><button className="backBtn">Back</button></Link>
            <div className="workWrap">
                <img src={cafe_thumbnail} alt="カフェサムネイル"/>
                <div className="workInformation">
                    <h1>Personally Cafe</h1>
                    <p className="season">1年前期個人制作</p>
                    <h2>使用技術</h2>
                    <p>HTML・CSS</p>
                    <h2>役割</h2>
                    <p>企画・サイトデザイン・コーディング・プレゼン</p>
                    <a href="https://personallycafe.vercel.app/" target="blank"><button className="siteBtn">サイトを見る</button></a>
                </div>
            </div>
            <div className="workReviewWrap">
                <h3>作品概要</h3>
                <p>本作品は、「推し活」とコーヒーを掛け合わせたカフェサイトです。
                    コーヒーの甘さや苦さを“推し”の性格やイメージに合わせてカスタマイズできる仕様にすることで、
                    推し活をより楽しめるコンセプトにしました。カフェとしての魅力だけでなく、
                    自分だけの“推しドリンク”を作る体験を通して、ユーザーが楽しめるサイトを目指して制作しました。
                </p>
                <h3>工夫した点</h3>
                <p>ナビバーから別ページへ遷移する構成ではなく、ページ内リンクを使用することで、
                    ユーザーがスムーズに移動できるよう工夫しました。ページの行き来を減らすことで
                    操作性を高め、ストレスなく閲覧できるサイト構成を意識して制作しました。
                </p>
                <h3>反省点</h3>
                <p>ナビバーに背景色を設定していなかったため、スクロール時に下のコンテンツと重なり、
                    文字や情報が見えにくくなってしまう部分がありました。デザイン性だけでなく
                    視認性も意識し、ユーザーが快適に閲覧できるUI設計の重要性を再確認しました。
                </p>
                <h3>振り返り</h3>
                <p>自分の好きな「推し活」とカフェを組み合わせた作品が制作でき、とても良い経験になりました。
                    専門学校に入ってから最初の作品制作だったので至らないところも多くありますが、
                    一つの作品として最後まで完成させることができて達成感を感じています。
                </p>
            </div>

            <footer>
                <p>&copy;2026Hina's Portfolio</p>
            </footer>

        </div>
        </>
    )
}
export default Cafe
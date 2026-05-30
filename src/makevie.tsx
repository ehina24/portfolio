import { Link } from "react-router-dom";
import makevie_thumbnail from './assets/img/makevie_thumbnail.svg';
import './css/works.css';

function Makevie(){
    return(
        <>
        <div className="makeviePageWrap">
            <Link to="/"><button className="backBtn">Back</button></Link>
            <div className="workWrap">
                <img src={makevie_thumbnail} alt="Makevieサムネイル" />
                <div className="workInformation">
                    <h1>Makevie</h1>
                    <p className="season">2年前期個人制作</p>
                    <h2>使用技術</h2>
                    <p>React・HTML・CSS・JavaScript</p>
                    <h2>役割</h2>
                    <p>企画・サイトデザイン・コーディング・プレゼン</p>
                    <a href="https://makevie.vercel.app/" target="blank"><button className="siteBtn">サイトを見る</button></a>
                </div>
            </div>
            <div className="workReviewWrap">
                <h3>作品概要</h3>
                <p>画像ではなく動画で顔のパーツごとにメイクを練習し、初心者でもメイクをマスターできることを
                    目指した学習サイトです。顔診断で自分に似合うメイクやコスメが分かり、バーチャルメイクで
                    気になるアイテムを試すことも可能。さらに、最新のコスメ情報もチェックできるなど、メイク初心者にうれしい機能が充実しています。
                </p>
                <h3>工夫した点</h3>
                <p>ユーザーが自分のペースで段階的にメイク技術を身につけられるよう、目・鼻・口など顔のパーツごとに
                    学習できる構成にしました。また、アイコンや動画サムネイルの色分けによってコンテンツを視覚的に区別しやすくし、
                    直感的に操作できるUIを意識して制作しました。
                </p>
                <h3>反省点</h3>
                <p>バーチャルメイク機能では、カメラの起動や写真撮影機能までは実装することができましたが、
                    実際にメイクを施したようなフィルターを適用する機能までは実装できませんでした。
                    実現には画像処理や顔認識技術に関する知識が必要であることを実感したため、今後実装できるよう改善したいです。
                </p>
                <h3>振り返り</h3>
                <p>カメラを起動して写真を撮影する機能の実装は初めての経験だったため、思うように動作せず悩む場面も多くありました。
                    しかし、試行錯誤しながら実装を進めることで新しい知識や技術を学ぶことができ、自分自身の成長に繋がったと
                    感じています。
                </p>
            </div>

            <footer>
                <p>&copy;2026Hina's Portfolio</p>
            </footer>

        </div>
        </>
    )
}
export default Makevie
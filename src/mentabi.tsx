import { Link } from "react-router-dom";
import mentabi_thumbnail from './assets/img/mentabi_thumbnail.svg';
import './css/works.css';

function Mentabi(){
    return(
        <>
        <div className="mentabiPageWrap">
            <Link to="/"><button className="backBtn">Back</button></Link>
            <div className="workWrap">
                <img src={mentabi_thumbnail} alt="めんたびサムネイル" />
                <div className="workInformation">
                    <h1>めんたび</h1>
                    <p className="season">2年後期個人制作</p>
                    <h2>使用技術</h2>
                    <p>HTML・CSS・JavaScript・PHP・MySQL</p>
                    <h2>役割</h2>
                    <p>企画・サイトデザイン・コーディング・プレゼン</p>
                    <Link to="http://10.202.10.3/ecc/hendo/works/2/mentabi/"><button className="siteBtn">サイトを見る</button></Link>
                </div>
            </div>
            <div className="workReviewWrap">
                <h3>作品概要</h3>
                <p>本作品は、和歌山ラーメンをきっかけに和歌山市をより深く楽しんでもらうための体験型情報サイトです。
                    ユーザーは簡単な診断から自分に合った一杯を見つけ、店舗情報やマップを通して実際に食べ歩くことが
                    できます。スタンプラリー機能によって旅の達成感を高め、ラーメンの魅力と街の魅力を同時に味わえる
                    構成にしました。食を入り口に、和歌山市を歩いて知るきっかけをつくる “旅と食の案内役” を目指しています。
                </p>
                <h3>工夫した点</h3>
                <p>店舗情報を記載する際、文字のみで住所を表示するのではなく、
                    Googleマップを埋め込むことで、利用者が場所を直感的に把握できるよう工夫しました。
                    ユーザー目線を意識し、使いやすさや分かりやすさを重視して制作しました。
                </p>
                <h3>反省点</h3>
                <p>データベース構築や登録処理の実装に時間がかかってしまい、
                    当初予定していたスタンプラリー機能や絞り込み機能まで実装することができませんでした。
                    今後は設計やスケジュール管理をより意識し、追加機能まで実装できるよう改善したいです。
                </p>
                <h3>振り返り</h3>
                <p>授業で学習したデータベースを活用したWebサイトを制作したいと思い、この企画を考えました。
                    授業内では理解していたつもりでも、実際に一人で設計・実装を進める中で多くの難しさを感じました。
                    しかし、その分データベースやバックエンド処理への理解が深まり、自分自身の成長を実感できる制作になりました
                </p>
            </div>

            <footer>
                <p>&copy;2026Hina's Portfolio</p>
            </footer>

        </div>
        </>
    )
}
export default Mentabi
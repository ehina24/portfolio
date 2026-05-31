import { Link } from "react-router-dom";
import my_photo from './assets/img/my_photo.svg';
import pink_flower from './assets/img/pink_flower.png';
import purple_flower from './assets/img/purple_flower.png';
function Mypage(){
    return(
        <>
        <div className="myPageWrap">
            <Link to="/"><button className="backBtn">Back</button></Link>
            <h1>Profile</h1>
            <img src={my_photo} alt="自分の画像" />
            <p>遠藤妃菜</p>
            <p>2027年3月卒業予定</p>
            <p>フロントエンドエンジニア志望</p>
            <p>私は周りのことをしっかり見て行動できる人間です。困っている人
                がいたら教えてあげたり助けてあげたりすることができます。また
                物事には諦めずに集中して取り組み課題や目標を達成することができます。
            </p>

            <h2>My Strengths</h2>
            <p>私の強み</p>
            <img src={pink_flower} alt="ピンクの花" />
            <h3>向上心を持って挑戦できる</h3>
            <p>私は、分からないことや新しい技術に対して積極的に挑戦する向上心があります。
                制作の中で初めて扱う技術や機能に直面した際も、調べながら試行錯誤を重ね、
                自分の知識として身につけることを大切にしています。実際に、データベースや
                React、カメラ機能の実装など、未経験の技術にも積極的に取り組んできました。
                今後も新しい知識や技術を学び続け、自身のスキル向上につなげていきたいと考えています。
            </p>

            <img src={purple_flower} alt="紫の花" />
            <h3>計画的に制作を進める力</h3>
            <p>私は、スケジュールを立てて計画的に物事を進めることを意識しています。
                制作に取り組む際は、作業内容を整理し、優先順位を考えながら進行する
                ことで、期限内に作品を完成させられるよう努めています。また、進捗状
                況を確認しながら作業を進めることで、余裕を持って修正や改善を行えるよう心掛けています。
                今後も計画性を活かし、品質と納期の両方を意識した制作ができるよう取り組んでいきたいです。
            </p>

            <h2>My 6 photos</h2>
            <p>私の6枚の写真</p>

            <footer>
                <p>&copy;2026Hina's Portfolio</p>
            </footer>

        </div>
        </>
    )
}
export default Mypage
import { Link } from "react-router-dom";
import '../src/css/mypage.css';
import my_photo from './assets/img/my_photo.svg';
import pink_flower from './assets/img/pink_flower.png';
import purple_flower from './assets/img/purple_flower.png';
import hobby_one from './assets/img/hobby_one.jpg';
import hobby_two from './assets/img/hobby_two.jpg';
import like_food from './assets/img/like_food.jpg';
import production from './assets/img/production.jpg';
import scenery_one from './assets/img/scenery_one.jpg';
import scenery_two from './assets/img/scenery_two.jpg';

function Mypage(){
    return(
        <>
        <div className="myPageWrap">
            <Link to="/"><button className="backBtn">Back</button></Link>
            <h1>Profile</h1>
            <div className="myProfileWrap">
                <img src={my_photo} alt="自分の画像" />
                <div className="myProfile">
                    <p className="name">遠藤妃菜</p>
                    <p className="graduationYear">2027年3月卒業予定</p>
                    <p className="occupation">フロントエンドエンジニア志望</p>
                    <p className="myStrengths">私は周りのことをしっかり見て行動できる人間です。困っている人
                        がいたら教えてあげたり助けてあげたりすることができます。また
                        物事には諦めずに集中して取り組み課題や目標を達成することができます。
                    </p>
                </div>
            </div>

            <div className="myStrengthsWrap">
                <div className="headingWrap">
                    <h2>My Strengths</h2>
                    <p>私の強み</p>
                </div>
                <div className="strengthsHeading">
                    <img src={pink_flower} alt="ピンクの花" />
                    <h3>向上心を持って挑戦できる</h3>
                </div>
                <p className="strengthsText">私は、分からないことや新しい技術に対して積極的に挑戦する向上心があります。
                    制作の中で初めて扱う技術や機能に直面した際も、調べながら試行錯誤を重ね、
                    自分の知識として身につけることを大切にしています。実際に、データベースや
                    React、カメラ機能の実装など、未経験の技術にも積極的に取り組んできました。
                    今後も新しい知識や技術を学び続け、自身のスキル向上につなげていきたいと考えています。
                </p>

                <div className="strengthsHeading">
                    <img src={purple_flower} alt="紫の花" />
                    <h3>計画的に制作を進める力</h3>
                </div>
                <p className="strengthsText">私は、スケジュールを立てて計画的に物事を進めることを意識しています。
                    制作に取り組む際は、作業内容を整理し、優先順位を考えながら進行する
                    ことで、期限内に作品を完成させられるよう努めています。また、進捗状
                    況を確認しながら作業を進めることで、余裕を持って修正や改善を行えるよう心掛けています。
                    今後も計画性を活かし、品質と納期の両方を意識した制作ができるよう取り組んでいきたいです。
                </p>
            </div>

            <div className="headingWrap">
                <h2>My 6 photos</h2>
                <p>私の6枚の写真</p>
            </div>
            <div className="photoWrap">
                <div className="photoItem">
                    <img src={hobby_one} alt="趣味1" className="myPhoto"/>
                    <p>映画館で作品を観ることが好きです</p>
                </div>
                <div className="photoItem">
                    <img src={like_food} alt="好きな食べ物" className="myPhoto"/>
                    <p>一時期和歌山ラーメン巡りしてました</p>
                </div>
                <div className="photoItem">
                    <img src={scenery_one} alt="景色1" className="myPhoto"/>
                    <p>初めて大阪を一望</p>
                </div>
                <div className="photoItem">
                    <img src={hobby_two} alt="趣味2" className="myPhoto"/>
                    <p>ライブに参戦して楽しんでいます</p>
                </div>
                <div className="photoItem">
                    <img src={production} alt="制作" className="myPhoto"/>
                    <p>2年生後期で制作した作品の展示風景</p>
                </div>
                <div className="photoItem">
                    <img src={scenery_two} alt="景色2" className="myPhoto"/>
                    <p>風景写真を撮ることが好きです</p>
                </div>
            </div>

            <footer>
                <p>&copy;2026Hina's Portfolio</p>
            </footer>

        </div>
        </>
    )
}
export default Mypage
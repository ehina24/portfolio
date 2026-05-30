import { Link } from "react-router-dom";
import monomobag_thumbnail from './assets/img/monomobag_thumbnail.svg';
import './css/works.css';

function Monomobag(){
    return(
        <>
        <div className="monomobagPageWrap">
            <Link to="/"><button className="backBtn">Back</button></Link>
            <div className="workWrap">
                <img src={monomobag_thumbnail} alt="モノモバッグサムネイル" />
                <div className="workInformation">
                    <h1>モノモバッグ</h1>
                    <p className="season">1年後期チーム制作</p>
                    <h2>使用技術</h2>
                    <p>React・TypeScript・HTML・CSS</p>
                    <h2>役割</h2>
                    <p>企画・コーディング・プレゼン</p>
                    <a href="https://monomobag.vercel.app/" target="blank"><button className="siteBtn">サイトを見る</button></a>
                </div>
            </div>
            <div className="workReviewWrap">
                <h3>作品概要</h3>
                <p>本作品は、忘れ物をしがちな大学生のために作られた旅行準備と帰宅時の荷造りをサポートする
                    パッキングアシスタント。出発前も帰宅後も持ち物をしっかり管理して旅行のストレスをゼロにします。
                    視覚的に整理できるリストと便利な通知機能であなたの旅をもっとスムーズ・安心に。モノモバッグが
                    あなたの旅行を見守ります。
                </p>
                <h3>工夫した点</h3>
                <p>実際にカバンへ荷物を入れる動作を再現することで、ユーザーが直感的に操作できるよう工夫しました。
                    また、荷物を追加するとカバンの中身や収納量が視覚的にわかるようにし、どの程度荷物が入っているのか
                    一目でわかるデザインにしました。これにより楽しみながら荷物管理ができる体験を意識して制作しました。
                </p>
                <h3>反省点</h3>
                <p>三学年合同のチーム制作だったため、当時は先輩から任された部分を中心に担当し、制作全体に積極的に
                    関わることができませんでした。その中で自分の技術不足を実感したため、今後は積極的に制作に貢献
                    できるようにしたいです。
                </p>
                <h3>振り返り</h3>
                <p>専門学校に入学して初めてのチーム制作だったため、どのように制作を進めればいいのかわからず、
                    試行錯誤の連続でした。しかし先輩方に教えていただきながら制作を進める中で多くの知識や技術を
                    学ぶことができました。また、チームで協力して一つの作品を完成させる経験は、自分にとって非常に
                    貴重なものになりました。
                </p>
            </div>

            <footer>
                <p>&copy;2026Hina's Portfolio</p>
            </footer>

        </div>
        </>
    )
}
export default Monomobag
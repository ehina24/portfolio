import { Link } from "react-router-dom";
import calendar from './assets/img/calendar.svg';
import './css/works.css';

function Calendar(){
    return(
        <>
        <div className="calenderPageWrap">
            <Link to="/"><button className="backBtn">Back</button></Link>
            <div className="workWrap">
                <img src={calendar} alt="カレンダー" className="graphicWork"/>
                <div className="workInformation">
                    <h1>カレンダー</h1>
                    <p className="season">1年後期授業制作</p>
                    <h2>役割</h2>
                    <p>デザイン</p>
                </div>
            </div>
            <div className="workReviewWrap">
                <h3>作品概要</h3>
                <p>本作品は、授業内で制作したカレンダーです。</p>
                <h3>工夫した点</h3>
                <p>各月ごとに使用する花や背景色を変更し、
                    季節感や月ごとの違いが伝わるよう工夫しました。
                    また、花のイラストは既存素材を使用するのではなく、
                    一つひとつ丁寧にトレースして制作することで、作品全体に統一感を持たせました。
                </p>
                <h3>反省点</h3>
                <p>花のイラストを一つひとつトレースして制作したため、想定以上に時間がかかり、
                    細部までデザインを調整しきれなかった部分がありました。そのため、
                    今後は制作スケジュールや作業工程をより意識し、全体の完成度を高められるよう改善していきたいです。
                </p>
                <h3>振り返り</h3>
                <p>制作当時はIllustratorのペンツールにまだ慣れておらず、
                    思うように綺麗なトレースができなかった部分がありました。しかし、
                    実際に制作を進める中で操作への理解を深めることができ、良い経験になったと感じています。
                </p>
            </div>

            <footer>
                <p>&copy;2026Hina's Portfolio</p>
            </footer>

        </div>
        </>
    )
}
export default Calendar
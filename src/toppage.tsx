import { Link } from "react-router-dom";
import '../src/css/toppage.css';
import hydrangea from './assets/img/hydrangea.svg';
import mentabi_thumbnail from './assets/img/mentabi_thumbnail.svg';
import calendar from './assets/img/calendar.svg';
import cafe_thumbnail from './assets/img/cafe_thumbnail.svg';
import makevie_thumbnail from './assets/img/makevie_thumbnail.svg';
import monomobag_thumbnail from './assets/img/monomobag_thumbnail.svg';
import poster from './assets/img/poster.svg';
import counter_thumbnail from './assets/img/counter_thumbnail.svg';
import booklife_thumbnail from './assets/img/booklife_thumbnail.svg';
import portfolio_thumbnail from './assets/img/portfolio_thumbnail.svg';
import my_photo from './assets/img/my_photo.svg';



function TOP(){
    return(
        <>
            <div className='contentWrap'>
                <nav className="navWrap">
                    <Link to="/works">Works</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                </nav>

                <div className="mainVisualWrap">
                    <h1>Hina's<br></br>Portfolio</h1>
                    <img src={hydrangea} alt="紫陽花イラスト" className="hydrangea"/>
                </div>

                <h2>Works</h2>

                <button>Web</button>
                <button>graphic</button>
                <button>other</button>

                <div>
                    <img src={mentabi_thumbnail} alt="めんたびサムネイル画像" />
                    <p>Web</p>
                    <p>めんたび</p>
                </div>
                <div>
                    <img src={calendar} alt="カレンダー" />
                    <p>graphic</p>
                    <p>カレンダー</p>
                </div>
                <div>
                    <img src={cafe_thumbnail} alt="カフェサイトサムネイル" />
                    <p>Web</p>
                    <p>Personally Cafe</p>
                </div>
                <div>
                    <img src={makevie_thumbnail} alt="Makevieサムネイル" />
                    <p>web</p>
                    <p>Makevie</p>
                </div>
                <div>
                    <img src={monomobag_thumbnail} alt="モノモバッグサムネイル" />
                    <p>Web</p>
                    <p>モノモバッグ</p>
                </div>
                <div>
                    <img src={poster} alt="ポスター" />
                    <p>graphic</p>
                    <p>キャンドルナイトポスター</p>
                </div>
                <div>
                    <img src={counter_thumbnail} alt="カウンタカウンターサムネイル" />
                    <p>Web</p>
                    <p>カウンターカウンター</p>
                </div>
                <div>
                    <img src={booklife_thumbnail} alt="Booklifeサムネイル" />
                    <p>Web</p>
                    <p>Booklife</p>
                </div>
                <div>
                    <img src={portfolio_thumbnail} alt="ポートフォリオサムネイル" />
                    <p>Web</p>
                    <p>Hina's Portfolio</p>
                </div>

                <h2>About</h2>
                <img src={my_photo} alt="自分の画像" />
                <p>遠藤妃菜</p>
                <p>2027年3月卒業予定</p>
                <p>フロントエンドエンジニア志望</p>
                <p>私は周りのことをしっかり見て行動できる人間です。困っている人がいたら
                    教えてあげたり助けてあげたりすることができます。また物事には諦めずに
                    集中して取り組み、課題や目標を達成することができます。</p>
                <button>View More</button>

                <footer>&copy;2026Hina's Portfolio</footer>
            </div>
        </>
    )
}

export default TOP
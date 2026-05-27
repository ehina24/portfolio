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
            <div className="contentWrap">
                <nav className="navWrap">
                    <a href="#works">Works</a>
                    <a href="#about">About</a>
                    <a href="#contact">Contact</a>
                </nav>

                <div className="mainVisualWrap">
                    <h1>Hina's<br></br>Portfolio</h1>
                    <img src={hydrangea} alt="紫陽花イラスト" className="hydrangea"/>
                </div>

                <h2 id="works">Works</h2>

            <div className="btnWrap">
                <button>Web</button>
                <button>graphic</button>
                <button>other</button>
            </div>

            <div className="worksWrap">
                <Link to="/works/mentabi" className="work">
                        <img src={mentabi_thumbnail} alt="めんたびサムネイル画像" />
                        <div className="workTitle">
                            <p className="category web">Web</p>
                            <h3>めんたび</h3>
                        </div>
                </Link>
                <Link to="/works/calendar" className="work">
                    <img src={calendar} alt="カレンダー" />
                    <div className="workTitle">
                        <p className="category graphic">graphic</p>
                        <h3>カレンダー</h3>
                    </div>
                </Link>
                <Link to="/works/cafe" className="work">
                    <img src={cafe_thumbnail} alt="カフェサイトサムネイル" />
                    <div className="workTitle">
                        <p className="category web">Web</p>
                        <h3>Personally Cafe</h3>
                    </div>
                </Link>
                <Link to="/works/makevie" className="work">
                    <img src={makevie_thumbnail} alt="Makevieサムネイル" />
                    <div className="workTitle">
                        <p className="category web">web</p>
                        <h3>Makevie</h3>
                    </div>
                </Link>
                <Link to="/works/monomobag" className="work">
                    <img src={monomobag_thumbnail} alt="モノモバッグサムネイル" />
                    <div className="workTitle">
                        <p className="category web">Web</p>
                        <h3>モノモバッグ</h3>
                    </div>
                </Link>
                <Link to="/works/poster" className="work">
                    <img src={poster} alt="ポスター" />
                    <div className="workTitle">
                        <p className="category graphic">graphic</p>
                        <h3>キャンドルナイトポスター</h3>
                    </div>
                </Link>
                <Link to="/works/counter" className="work">
                    <img src={counter_thumbnail} alt="カウンタカウンターサムネイル" />
                    <div className="workTitle">
                        <p className="category web">Web</p>
                        <h3>カウンターカウンター</h3>
                    </div>
                </Link>
                <Link to="/works/booklife" className="work">
                    <img src={booklife_thumbnail} alt="Booklifeサムネイル" />
                    <div className="workTitle">
                        <p className="category web">Web</p>
                        <h3>Booklife</h3>
                    </div>
                </Link>
                <Link to="/works/portfolio" className="work">
                    <img src={portfolio_thumbnail} alt="ポートフォリオサムネイル" />
                    <div className="workTitle">
                        <p className="category web">Web</p>
                        <h3>Hina's Portfolio</h3>
                    </div>
                </Link>
            </div>
                <h2 id="about">About</h2>
                <div className="myInformationWrap">
                    <img src={my_photo} alt="自分の画像" />
                    <div className="myInformation">
                        <div className="profileText">
                            <p className="name">遠藤妃菜</p>
                            <p className="graduationYear">2027年3月卒業予定</p>
                        </div>
                        <p className="occupation">フロントエンドエンジニア志望</p>
                        <p className="myStrengths">私は周りのことをしっかり見て行動できる人間です。困っている人がいたら
                            教えてあげたり助けてあげたりすることができます。また物事には諦めずに
                            集中して取り組み、課題や目標を達成することができます。
                        </p>
                        <button>View More</button>
                    </div>
                </div>

                <h2 id="contact">Contact</h2>
                    <a href="mailto:hina.endo0624@gmail.com" className="mail">hina.endo0624@gmail.com</a>
                
                <footer>
                    <p>&copy;2026Hina's Portfolio</p>
                </footer>
            </div>
        </>
    )
}

export default TOP
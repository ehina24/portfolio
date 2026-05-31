import { Link } from "react-router-dom";
import { useState } from "react";
import '../src/css/toppage.css';
import hydrangea from './assets/img/hydrangea.svg';
import mentabi_thumbnail from './assets/img/mentabi_thumbnail.svg';
import calendar from './assets/img/calendar.svg';
import cafe_thumbnail from './assets/img/cafe_thumbnail.svg';
import makevie_thumbnail from './assets/img/makevie_thumbnail.svg';
import monomobag_thumbnail from './assets/img/monomobag_thumbnail.svg';
import counter_thumbnail from './assets/img/counter_thumbnail.svg';
import booklife_thumbnail from './assets/img/booklife_thumbnail.svg';
import portfolio_thumbnail from './assets/img/portfolio_thumbnail.svg';
import my_photo from './assets/img/my_photo.svg';


function TOP(){
    const [filter,setFilter] = useState("all");

    const works = [
        {
            title:"めんたび",
            category:"web",
            image:mentabi_thumbnail,
            path:"/works/mentabi"
        },
        {
            title:"カレンダー",
            category:"graphic",
            image:calendar,
            path:"/works/calendar"
        },
        {
            title: "Personally Cafe",
            category: "web",
            image: cafe_thumbnail,
            path: "/works/cafe"
        },
        {
            title: "Makevie",
            category: "web",
            image: makevie_thumbnail,
            path: "/works/makevie"
        },
        {
            title: "モノモバッグ",
            category: "web",
            image: monomobag_thumbnail,
            path: "/works/monomobag"
        },
        {
            title: "カウンターカウンター",
            category: "web",
            image: counter_thumbnail,
            path: "/works/counter"
        },
        {
            title: "Booklife",
            category: "web",
            image: booklife_thumbnail,
            path: "/works/booklife"
        },
        {
            title: "Hina's Portfolio",
            category: "web",
            image: portfolio_thumbnail,
            path: "/works/portfolio"
        }
    ];

    return(
        <>
        <div className="topPageWrap">
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
                <button onClick={() => setFilter("all")}>All</button>
                <button onClick={() => setFilter("web")}>Web</button>
                <button onClick={() => setFilter("graphic")}>Graphic</button>
                <button onClick={() => setFilter("other")}>Other</button>
            </div>

            <div className="worksWrap">
                        {works
                .filter(work => filter === "all" || work.category === filter)
                .map(work => (
                    <Link
                        to={work.path}
                        className="work"
                        key={work.title}
                    >
                        <img src={work.image} alt={work.title} />
                        <div className="workTitle">
                            <p className={`category ${work.category}`}>
                                {work.category}
                            </p>
                            <h3>{work.title}</h3>
                        </div>
                    </Link>
                ))}
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
                        <Link to="/about/mypage"><button>View More</button></Link>
                    </div>
                </div>

                <h2 id="contact">Contact</h2>
                    <a href="mailto:hina.endo0624@gmail.com" className="mail">hina.endo0624@gmail.com</a>
                
                <footer>
                    <p>&copy;2026Hina's Portfolio</p>
                </footer>
            </div>
        </div>
        </>
    )
}

export default TOP
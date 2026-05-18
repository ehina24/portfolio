import { Link } from "react-router-dom";
import '../src/css/toppage.css';
import hydrangea from './assets/img/hydrangea.svg';
import mentabi_thumbnail from './assets/img/mentabi_thumbnail.svg';


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
            </div>
        </>
    )
}

export default TOP
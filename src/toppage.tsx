import { Link } from "react-router-dom";
import '../src/css/toppage.css';
import hydrangea from './assets/img/hydrangea.svg';


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

                <div></div>
                <p>Web</p>
                <p>作品名</p>
                <p>2000.9</p>

                <div></div>
                <p>Web</p>
                <p>作品名</p>
                <p>2000.9</p>
            </div>
        </>
    )
}

export default TOP
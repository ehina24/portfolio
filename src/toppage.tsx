import { Link } from "react-router-dom";
import '../src/css/toppage.css';
import hydrangea from './assets/img/hydrangea.svg';

function TOP(){
    return(
        <>
            <div className='contentWrap'>
                <nav>
                    <Link to="/works">Works</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                </nav>

                <h1>Hina's Portfolio</h1>
                <img src={hydrangea} alt="紫陽花イラスト" />

                <h2>Works</h2>
                <h3>appeal works</h3>
                
                <div></div>
                <p>Web</p>
                <p>作品名</p>
                <p>2000.9</p>

                <div></div>
                <p>Web</p>
                <p>作品名</p>
                <p>2000.9</p>

                <h3>others</h3>
            </div>
        </>
    )
}

export default TOP
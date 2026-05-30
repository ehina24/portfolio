import { Route, Routes } from "react-router-dom";
import TOP from "./toppage";
import Mentabi from "./mentabi";
import Calendar from "./calendar";
import Cafe from "./cafe";
import Makevie from "./makevie";
import Monomobag from "./monomobag";
import Counter from "./counter";
import Booklife from "./booklife";
import Portfolio from "./portfolio";

function App(){
    return(
        <>
        <Routes>
            <Route path="/" element={<TOP/>} />
            <Route path="/works/mentabi" element={<Mentabi />}/>
            <Route path="/works/calendar" element={<Calendar />}/>
            <Route path="/works/cafe" element={<Cafe />}/>
            <Route path="/works/makevie" element={<Makevie />}/>
            <Route path="/works/monomobag" element={<Monomobag />}/>
            <Route path="/works/counter" element={<Counter />}/>
            <Route path="/works/booklife" element={<Booklife />}/>
            <Route path="/works/portfolio" element={<Portfolio />}/>
        </Routes>
        </>
    )
}

export default App
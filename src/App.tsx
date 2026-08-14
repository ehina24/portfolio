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
import Mypage from "./mypage";
import Businesscard from "./businesscard";
import Mentabiprthumbnail from "./mentabi_pr_thumbnail";
import Booklifeleaflet from "./booklife_leaflet";
import Booklifebookmark from "./booklife_bookmark";

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
            <Route path="/works/business_card" element={<Businesscard />}/>
            <Route path="/works/mentabi_pr_thumbnail" element={<Mentabiprthumbnail />}/>
            <Route path="/works/booklife_leaflet" element={< Booklifeleaflet/>}/>
            <Route path="/works/booklife_bookmark" element={<Booklifebookmark />}/>
            <Route path="/about/mypage" element={<Mypage />}/>
        </Routes>
        </>
    )
}

export default App
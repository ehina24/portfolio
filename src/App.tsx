import { Route, Routes } from "react-router-dom";
import TOP from "./toppage";
import Mentabi from "./mentabi";

function App(){
    return(
        <>
        <Routes>
            <Route path="/" element={<TOP/>} />
            <Route path="/works/mentabi" element={<Mentabi />}/>
        </Routes>
        </>
    )
}

export default App
import { Route, Routes } from "react-router-dom";
import TOP from "./toppage";

function App(){
    return(
        <>
        <Routes>
            <Route path="/" element={<TOP/>} />
        </Routes>
        </>
    )
}

export default App
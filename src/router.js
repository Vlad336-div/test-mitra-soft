import {Routes, Route} from "react-router-dom"
import Home from "./Pages/Home/Home"
import About from "./Pages/About/About"

const Router = () => {
    return (
        <Routes>
            <Route path="/about" element={<About/>}/>
            <Route path="*" element={<Home/>}/>
        </Routes>
    )
}

export default Router
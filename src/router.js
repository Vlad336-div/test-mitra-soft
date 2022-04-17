import {Routes, Route} from "react-router-dom"
import Home from "./Pages/Home/Home"
import About from "./Pages/About/About"
import ImagePage from "./Pages/Image/Image"

const Router = () => {
    return (
        <Routes>
            <Route path="/about" element={<About/>}/>
            <Route path="/image/:id" element={<ImagePage/>}/>
            <Route path="*" element={<Home/>}/>
        </Routes>
    )
}

export default Router
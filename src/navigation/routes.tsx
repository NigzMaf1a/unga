import { BrowserRouter, Routes, Route } from "react-router-dom";

//pages
import SplashScreen from "../pages/SplashScreen";
import About from "../pages/about";

export default function BrowserRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SplashScreen/>} />
                <Route path="/about" element={<About />} />
            </Routes>
        </BrowserRouter>
    );
}
import { BrowserRouter, Routes, Route } from "react-router-dom";

//pages
import MainPage from "../pages/logic/MainPage";
import Projects from "../pages/Projects";
import Education from "../pages/Education";
import Experience from "../pages/Experience";
import Technology from "../pages/Technology";
import Skills from "../pages/Skills";
import Contact from "../pages/Contact";


export default function BrowserRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/education" element={<Education />} />
                <Route path="/experience" element={<Experience />} />
                <Route path="/technology" element={<Technology />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </BrowserRouter>
    );
}
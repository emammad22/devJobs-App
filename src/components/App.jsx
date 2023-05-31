import React,{useState} from "react";
import '../styles/App.css'
import '../styles/Filter.css'
import '../styles/Button.css'
import { Routes, Route } from "react-router-dom";
import VacancyDetail from "./VacancyDetails";
import HomePage from "./HomePage";
import DarkMode from "./DarkMode";


function App() {

    const [mode, setMode] = useState(false)


    function handleMode() {
        mode ? setMode(false) : setMode(true);
        const { theme } = document.documentElement.dataset;
        if (!theme) {
            document.documentElement.dataset.theme = 'dark';
        } else {
            document.documentElement.dataset.theme = '';
        }
    }

    return (
        <>
            <div className="header">
                <div className="container">
                    <div className="header-inner">
                        <div className="header-up">
                            <h1>devJobs</h1>
                            <DarkMode handleMode={handleMode} classNa={mode ? 'toggle-on' : 'toggle-off'} />
                        </div>
                    </div>
                </div>
            </div>


            <Routes>
                <Route index element={<HomePage />} />
                <Route path="/:vacancyId" element={<VacancyDetail />} />
            </Routes>
        </>
    );
}

export default App;
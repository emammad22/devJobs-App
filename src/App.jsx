import React, { useEffect, useState } from "react";
import vacancies from './data'
import './App.css'
import DarkMode from "./DarkMode";
import Filter from "./Filter";
import './Filter.css'


function App() {


    const [mode, setMode] = useState(false)

    useEffect(() => {
        console.log(vacancies);
    })

    function handleMode() {
        mode ? setMode(false) : setMode(true);
    }

    return (
        <div className="header">
            <div className="container">
                <div className="header-inner">
                    <div className="header-up">
                        <h1>devJobs</h1>
                        <DarkMode handleMode={handleMode} classNa={mode ? 'toggle-on' : 'toggle-off'} />
                    </div>
                </div>
                <Filter />
            </div>
        </div>
    );
}

export default App;
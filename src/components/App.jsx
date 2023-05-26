import React, { useEffect, useState } from "react";
import vacancies from '../data'
import '../styles/App.css'
import DarkMode from "./DarkMode";
import Filter from "./Filter";
import '../styles/Filter.css'
import Vacancy from "./Vacancy";
import '../styles/Button.css'

const LIMIT = 5;


function App() {

    const [mode, setMode] = useState(false)
    const [theme, setTheme] = useState('')
    const [filteredList, setFilteredList] = useState(vacancies);
    const [more, setMore] = useState(0);
    const [count, setCount] = useState(LIMIT);


    useEffect(() => {
        setFilteredList(vacancies.filter((vacancy, index) => {
            return index < count ? vacancy : null;
        })
        )
        // setFilteredList((filteredList)=> [...filteredList, ...vacancies.filter((vacancy,index)=>{
        //     return index < count ? vacancy : null;
        // })])
    }, [count]);

    function handleMode() {
        mode ? setMode(false) : setMode(true);
        const { theme } = document.documentElement.dataset;
        if (!theme) {
            document.documentElement.dataset.theme = 'dark';
        } else {
            document.documentElement.dataset.theme = '';
        }
    }

    // (fulltime.value ? vacancy.contract == 'Full Time' : vacancy) &&

    function filterVacancy(e) {
        e.preventDefault();
        const { title, location, fulltime } = e.target.elements;
        console.log(fulltime.value);
        console.log(e.target.elements);
        setFilteredList(vacancies.filter((vacancy) => {
            return  vacancy.location.toLowerCase().includes(location.value.toLowerCase())
                && vacancy.position.toLowerCase().includes(title.value);
        }).map((vacancy) => {
            return vacancy;
        }))
    }

    function handleLoadMore() {
        if (count >= vacancies.length) {
            return;
        }
        setCount((count) => count + LIMIT);
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
                    <Filter filterVacancy={filterVacancy} />
                </div>
            </div>

            <div className="main">
                <div className="container">
                    <div className="main-inner">
                        {
                            filteredList.map((vacancy, index) => {
                                return index < count ? <Vacancy
                                    key={index}
                                    logo={vacancy.logo}
                                    back={vacancy.logoBackground}
                                    company={vacancy.company}
                                    time={vacancy.postedAt}
                                    contract={vacancy.contract}
                                    position={vacancy.position}
                                    location={vacancy.location}
                                /> : null;
                            })
                        }

                    </div>
                </div>
            </div>

            <div className="button">
                <button className={`more ${count === vacancies.length ? 'disabled' : null}`} onClick={handleLoadMore}>Load More</button>
            </div>
        </>
    );
}

export default App;
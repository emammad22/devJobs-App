import React, { useState } from "react";
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


    function handleMode() {
        mode ? setMode(false) : setMode(true);
        const { theme } = document.documentElement.dataset;
        if (!theme) {
            document.documentElement.dataset.theme = 'dark';
        } else {
            document.documentElement.dataset.theme = '';
        }
    }

    function filterVacancy(e) {
        e.preventDefault();
        const { title, location, fulltime } = e.target.elements;
        console.log(title, location, fulltime);
        let list = [...vacancies]
        if (title.value) {
            list = list.filter((vacancy) => {
                return vacancy.position.toLowerCase().includes(title.value.toLowerCase())
            })
        }
        if (location.value) {
            list = list.filter((vacancy) => {
                return vacancy.location.toLowerCase().includes(location.value.toLowerCase())
            })
        }
        if (fulltime.value) {
            list = list.filter((vacancy) => {
                return vacancy.contract === fulltime.value;
            })
        }
        console.log(list);
        setFilteredList(list);
    }

    function handleLoadMore() {
        if (count >= vacancies.length) {
            return;
        }
        setCount((count) => count + 5);
    }

    function disableLoadMore() {
        if (count === vacancies.length) {
            return 'disabled'
        }

        if (filteredList.length < 5) {
            return 'disabled'
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
                    <Filter filterVacancy={filterVacancy} />
                </div>
            </div>

            <div className="main">
                <div className="container">
                    <div className="main-inner">
                        {
                            filteredList.slice(0, count).map((vacancy, index) => {
                                return <Vacancy
                                    key={index}
                                    logo={vacancy.logo}
                                    back={vacancy.logoBackground}
                                    company={vacancy.company}
                                    time={vacancy.postedAt}
                                    contract={vacancy.contract}
                                    position={vacancy.position}
                                    location={vacancy.location}
                                />
                            })
                        }

                    </div>
                </div>
            </div>

            <div className="button">
                <button className={`more ${disableLoadMore()}`}
                    onClick={handleLoadMore}>
                    Load More
                </button>
            </div >
        </>
    );
}

export default App;
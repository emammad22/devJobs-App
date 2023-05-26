import React, { useState } from "react";
import searchSvg from '../../assets/desktop/icon-search.svg'
import locationSvg from '../../assets/desktop/icon-location.svg'
function Filter(props) {

    const [position, setPosition] = useState('');
    const [location, setLocation] = useState('');
    const [fullTime, setFullTime] = useState(false);

    function handleTitle(value) {
        setPosition(value)
    }

    function handleLocation(value) {
        setLocation(value);
    }

    function handleContract(value) {
        if (value) {
            setFullTime(value);
        } else {
            setFullTime(false)
        }
    }

    return (
        <form className="filter" onSubmit={props.filterVacancy}>
            <div className="filter-title">
                <label htmlFor="title"><img src={searchSvg} alt="" /></label>
                <input type="text"
                    id='title'
                    placeholder="Filter by title, companies, expertise…"
                    value={position}
                    onChange={(e) => {
                        handleTitle(e.target.value)
                    }}
                />
            </div>
            <div className="filter-location">
                <label htmlFor="location"><img src={locationSvg} alt="" /></label>
                <input type="text"
                    id="location"
                    placeholder="Filter by location…"
                    value={location}
                    onChange={(e) => {
                        handleLocation(e.target.value)
                    }}
                />
            </div>
            <div className="filter-time">
                <div className="checkbox">
                    <input type="checkbox"
                        id="fulltime"
                        value={fullTime}
                        onChange={(e) => {
                            handleContract(e.target.checked)
                        }}
                    />
                    <label htmlFor="fulltime">Full Time Only</label>
                </div>
            </div>
            <div className="submit">
                <button className="submit-btn"><small className="btn-text">Search</small><i className="fa-solid fa-magnifying-glass"></i></button>
            </div>
        </form>
    );
}

export default Filter;
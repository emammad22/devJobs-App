import React from "react";
import searchSvg from './assets/desktop/icon-search.svg'
import locationSvg from './assets/desktop/icon-location.svg'
function Filter() {
    return (
        <div className="filter">
            <div className="filter-title">
                <label htmlFor="title"><img src={searchSvg} alt="" /></label>
                <input type="text" id='title' placeholder="Filter by title, companies, expertise…" />
            </div>
            <div className="filter-location">
                <label htmlFor="location"><img src={locationSvg} alt="" /></label>
                <input type="text" id="location" placeholder="Filter by location…" />
            </div>
            <div className="filter-time">
                <div className="checkbox">
                    <input type="checkbox" id="full-time" />
                    <label htmlFor="full-time">Full Time Only</label>
                </div>
                <div className="submit">
                    <button className="submit-btn">Search</button>
                </div>
            </div>
        </div>
    );
}

export default Filter;
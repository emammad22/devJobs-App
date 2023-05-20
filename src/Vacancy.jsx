import React from "react";


function Vacancy(props) {
    return (
        <div className="vacancy-card">
            <div className="vacancy-des">
                <div className="company-logo" style={{backgroundColor : props.back}}>
                    <img src={props.logo} alt="" />
                </div>
                <div className="time-contract">
                    <span className="time">{props.time}</span>
                    <span className="dot"></span>
                    <span className="contract">{props.contract}</span>
                </div>
                <p className="position">{props.position}</p>
                <p className="company-name">{props.company}</p>
                <p className="country">{props.location}</p>
            </div>
        </div>
    );
}

export default Vacancy;
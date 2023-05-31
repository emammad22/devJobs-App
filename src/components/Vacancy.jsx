import React from "react";
import { Link } from "react-router-dom";


function Vacancy(props) {
    return (
        <>

            <Link to={`/${props.id}`}>
                <div className="vacancy-card animate__animated animate__fadeIn">
                    <div className="vacancy-des">
                        <div className="company-logo" style={{ backgroundColor: props.back }}>
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
            </Link>
        </>
    );
}

export default Vacancy;
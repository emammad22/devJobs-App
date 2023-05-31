import React from "react";
import { useParams } from "react-router-dom";
import vacancies from '../data'
import '../styles/Details.css'

function VacancyDetail() {

    const { vacancyId } = useParams();
    return (
        <>
            {
                vacancies.filter((elem) => {
                    return elem.id === Number(vacancyId);
                }).map((element, index) => {
                    return <div key={index} className="details">
                        <div className="container">
                            <div className="details-inner">
                                <div className="company-block">
                                    <div className="company-logo" style={{ backgroundColor: element.logoBackground }}>
                                        <img src={`../.${element.logo}`} alt="logo" />
                                    </div>
                                    <div className="company-details">
                                        <div className="company-name-mail">
                                            <p className="name">{element.company}</p>
                                            <p className="mail">{element.website}</p>
                                        </div>
                                        <div className="site-btn">
                                            <button className="site">Company Site</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="vacancy-details">
                                    <div className="vacancy-header">
                                        <div className="vacancy-header-inner">
                                            <div className="vacancy-time">
                                                <span className="time">{element.postedAt}</span>
                                                <span className="dott"></span>
                                                <span className="conract">{element.contract}</span>
                                            </div>
                                            <div className="vacancy-name">
                                                <h2>{element.position}</h2>
                                            </div>
                                            <div className="country">
                                                <p>{element.location}</p>
                                            </div>
                                        </div>
                                        <div className="apply-now">
                                            <button className="apply">Apply Now</button>
                                        </div>
                                    </div>
                                    <div className="vacancy-description">
                                        <p className="description">
                                            {element.description}
                                        </p>
                                    </div>
                                    <div className="vacancy-requirements">
                                        <h3>Requirements</h3>
                                        <p className="requirements-content">
                                            {element.requirements.content}
                                        </p>
                                        <ul className="requirement-list">
                                            {element.requirements.items.map((item,index) => {
                                                return <li key={index} className="item-first">{item}</li>
                                            })}
                                        </ul>
                                    </div>
                                    <div className="youWillDo">
                                        <h3>What you will do</h3>
                                        <p className="youWillDo-content">
                                            {
                                                element.role.content
                                            }
                                        </p>
                                        <ol className="youwilldo-list">
                                            {
                                                element.role.items.map((item, index) => {
                                                    return <li key={index} className="do-item">{item}</li>
                                                })
                                            }

                                        </ol>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                })
            }

        </>
    );
}

export default VacancyDetail;
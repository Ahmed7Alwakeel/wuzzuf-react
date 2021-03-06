import React, { useContext, useState ,useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./editProfile.scss";
import { languageContext } from '../../contexts/languageContext';
import ar from "../../language/editProfile/general-info/ar.json"
import en from "../../language/editProfile/general-info/en.json"

export default function Sidebar() {
    const { lang, setLang } = useContext(languageContext);
    const [json, setJson] = useState(en);

    useEffect(() => {
        if (lang == "English") { setJson(en) }
        if (lang == 'العربية') { setJson(ar) }
    }, [lang])

    return (
        <>
            <aside className="col-lg-4">
                <div className="row">
                    <div className="col-lg-12 d-lg-block d-md-none d-none">
                        <div className="sidebar">
                            <ul className="list-group">
                                <NavLink to="/profile/general-info" activeClassName="sidebar__actived">
                                    <li className="list-group-item">{json.generalInfo}</li>
                                </NavLink>
                                {/* <NavLink
                                    to="/profile/career-interests"
                                    activeClassName="sidebar__actived"
                                >
                                    <li className="list-group-item">Career Interests</li>
                                </NavLink> */}
                                {/* <NavLink
                                    to="/profile/learning-interests"
                                    activeClassName="sidebar__actived"
                                >
                                    <li className="list-group-item">Learning Interests</li>
                                </NavLink> */}
                                {/* <NavLink to="/profile/experience" activeClassName="sidebar__actived">
                                    <li className="list-group-item ">Experiance</li>
                                </NavLink> */}
                                {/* <NavLink to="#">
                                    <li className="list-group-item">Education</li>
                                </NavLink> */}
                                {/* <NavLink to="#">
                                    <li className="list-group-item">Skills</li>
                                </NavLink> */}
                                <NavLink
                                    to="/profile/online-presence"
                                    activeClassName="sidebar__actived"
                                >
                                    <li className="list-group-item ">{json.onlinePresence}</li>
                                </NavLink>
                                <NavLink to="/profile/cv">
                                    <li className="list-group-item">{json.uploadCv}</li>
                                </NavLink>
                                {/* <NavLink
                                    to="/profile/additional-info"
                                    activeClassName="sidebar__actived"
                                >
                                    <li className="list-group-item">Achievements</li>
                                </NavLink> */}
                            </ul>
                        </div>
                    </div>
                    {/* <div className="col-md-12 mt-3 col-lg-12 d-lg-block d-md-none d-none">
                        <div className="sidebar">
                            <div className="sidebar__fonts">
                                <h6>Improve Your Profile</h6>
                                <p>
                                    <i>
                                        0 employers viewed your profile in the last 30 days (1 all
                                        time)
                                    </i>
                                </p>
                                <div className="progress mb-2">
                                    <div
                                        className="progress-bar bg-warning"
                                        role="progressbar"
                                        aria-valuenow="67"
                                        aria-valuemin="0"
                                        style={{ width: 20 + "em" }}
                                        aria-valuemax="100"
                                    ></div>
                                </div>
                                <p>Your profile strength is 67%</p>
                            </div>
                        </div>
                    </div> */}
                </div>
            </aside>
        </>
    );
}

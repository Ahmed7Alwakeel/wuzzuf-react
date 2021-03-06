import React, { useContext, useState ,useEffect } from "react";
import "./editProfile.scss"
import { useAuth } from "../../contexts/authContext"
import { db } from "../../firebase";
import { toast } from 'react-toastify';
import { languageContext } from '../../contexts/languageContext';
import ar from "../../language/editProfile/general-info/ar.json"
import en from "../../language/editProfile/general-info/en.json"

export default function OnlinePresence() {
    
    const { currentUser } = useAuth()
    const [userDetails, setUserDetails] = useState({});
    const { lang, setLang } = useContext(languageContext);
    const [json, setJson] = useState(en);

    useEffect(() => {
        if (lang == "English") { setJson(en) }
        if (lang == 'العربية') { setJson(ar) }
    }, [lang])

    //get user details according to auth
    useEffect(() => {
        if (currentUser) {
            const userId = currentUser.uid
            // console.log(userId);
            db.collection("users").doc(userId).get().then(snapshot => {
                if (snapshot.exists) {
                    setUserDetails(snapshot.data())
                }
            })
        }
    }, [currentUser])

    console.log(userDetails);

    const linkedInChangeHandler = (event) => {
        setUserDetails((prevState) => {
            return {
                ...prevState,
                onlinePresence: {
                    ...prevState.onlinePresence,
                    linkedIn: event.target.value
                }
            }
        })
    }

    const facebookChangeHandler = (event) => {
        setUserDetails((prevState) => {
            return {
                ...prevState,
                onlinePresence: {
                    ...prevState.onlinePresence,
                    facebook: event.target.value
                }
            }
        })
    }

    const twitterChangeHandler = (event) => {
        setUserDetails((prevState) => {
            return {
                ...prevState,
                onlinePresence: {
                    ...prevState.onlinePresence,
                    twitter: event.target.value
                }
            }
        })
    }

    const behanceChangeHandler = (event) => {
        setUserDetails((prevState) => {
            return {
                ...prevState,
                onlinePresence: {
                    ...prevState.onlinePresence,
                    behance: event.target.value
                }
            }
        })
    }

    const instagramChangeHandler = (event) => {
        setUserDetails((prevState) => {
            return {
                ...prevState,
                onlinePresence: {
                    ...prevState.onlinePresence,
                    instagram: event.target.value
                }
            }
        })
    }

    const gitHubChangeHandler = (event) => {
        setUserDetails((prevState) => {
            return {
                ...prevState,
                onlinePresence: {
                    ...prevState.onlinePresence,
                    gitHub: event.target.value
                }
            }
        })
    }

    const youTubeChangeHandler = (event) => {
        setUserDetails((prevState) => {
            return {
                ...prevState,
                onlinePresence: {
                    ...prevState.onlinePresence,
                    youTube: event.target.value
                }
            }
        })
    }

    const blogChangeHandler = (event) => {
        setUserDetails((prevState) => {
            return {
                ...prevState,
                onlinePresence: {
                    ...prevState.onlinePresence,
                    blog: event.target.value
                }
            }
        })
    }

    const websiteChangeHandler = (event) => {
        setUserDetails((prevState) => {
            return {
                ...prevState,
                onlinePresence: {
                    ...prevState.onlinePresence,
                    website: event.target.value
                }
            }
        })
    }

    const otherChangeHandler = (event) => {
        setUserDetails((prevState) => {
            return {
                ...prevState,
                onlinePresence: {
                    ...prevState.onlinePresence,
                    other: event.target.value
                }
            }
        })
    }

    const submitHandler = (event) => {
        event.preventDefault();
        if (currentUser) {
            const userId = currentUser.uid

            db.collection("users").doc(userId)
                .set(userDetails).then(() => {
                    console.log(userDetails);
                }).then(() => {
                    toast.success("Online Presence updated succesfully !", {
                        position: toast.POSITION.TOP_LEFT
                    })
                })
        }
    }

    return (<>
        <article className="col-lg-8 col-md-12">
            <div className="row">
                <div className="col-md-12">
                    <div className="midsection mb-4" style={lang=="English" ?{paddingLeft : "5px"} : {paddingRight : "20px"}}>
                        <h5 className="mb-4">{json.onlinePresence}</h5>
                        <div className="midsection__form">
                            <div className="mb-4 row">
                                <label htmlFor="LinkedIn" className="col-sm-2 form-label text-dark">{json.linkedIn}</label>
                                <div className="col-sm-8">
                                    <input type="text" className="form-control" id="LinkedIn" placeholder="linkeding.com/in/username"
                                        onChange={linkedInChangeHandler}
                                        value={userDetails.onlinePresence?.linkedIn ? userDetails.onlinePresence.linkedIn : ""}
                                    />
                                </div>
                            </div>
                            <div className="mb-4 row">
                                <label htmlFor="Facebook" className="col-sm-2 form-label text-dark">{json.facebook}</label>
                                <div className="col-sm-8">
                                    <input type="text" className="form-control" id="Facebook" placeholder="facebook.com/username"
                                        onChange={facebookChangeHandler}
                                        value={userDetails.onlinePresence?.facebook ? userDetails.onlinePresence.facebook : ""} />
                                </div>
                            </div>
                            <div className="mb-4 row">
                                <label htmlFor="Twitter" className="col-sm-2 form-label text-dark">{json.twitter}</label>
                                <div className="col-sm-8">
                                    <input type="text" className="form-control" id="Twitter" placeholder="twitter.com/username"
                                        onChange={twitterChangeHandler}
                                        value={userDetails.onlinePresence?.twitter ? userDetails.onlinePresence.twitter : ""} />
                                </div>
                            </div>
                            <div className="mb-4 row">
                                <label htmlFor="Behance" className="col-sm-2 form-label text-dark" >{json.behance}</label>
                                <div className="col-sm-8">
                                    <input type="text" className="form-control" id="Behance" placeholder="behance.net.com/username"
                                        onChange={behanceChangeHandler}
                                        value={userDetails.onlinePresence?.behance ? userDetails.onlinePresence.behance : ""} />
                                </div>
                            </div>
                            <div className="mb-4 row">
                                <label htmlFor="Instagram" className="col-sm-2 form-label text-dark" >{json.instagram}</label>
                                <div className="col-sm-8">
                                    <input type="text" className="form-control" id="Instagram" placeholder="instgram.com/username"
                                        onChange={instagramChangeHandler}
                                        value={userDetails.onlinePresence?.instagram ? userDetails.onlinePresence.instgram : ""} />
                                </div>
                            </div>
                            <div className="mb-4 row">
                                <label htmlFor="GitHub" className="col-sm-2 form-label text-dark">{json.github}</label>
                                <div className="col-sm-8">
                                    <input type="text" className="form-control" id="GitHub" placeholder="github.com/username"
                                        value={userDetails.onlinePresence?.gitHub ? userDetails.onlinePresence.gitHub : ""}
                                        onChange={gitHubChangeHandler} />

                                </div>
                            </div>

                            <div className="mb-4 row">
                                <label htmlFor="YouTube" className="col-sm-2 form-label text-dark">{json.youtube}</label>
                                <div className="col-sm-8">
                                    <input type="text" className="form-control" id="YouTube" placeholder="youtube.com/username"
                                        onChange={youTubeChangeHandler}
                                        value={userDetails.onlinePresence?.youTube ? userDetails.onlinePresence.youTube : ""}
                                    />
                                </div>
                            </div>
                            <div className="mb-4 row">
                                <label htmlFor="Blog" className="col-sm-2 form-label text-dark">{json.blog}</label>
                                <div className="col-sm-8">
                                    <input type="text" className="form-control" id="Blog" placeholder="your blog" onChange={blogChangeHandler}
                                        value={userDetails.onlinePresence?.blog ? userDetails.onlinePresence.blog : ""} />
                                </div>
                            </div>
                            <div className="mb-4 row">
                                <label htmlFor="Website" className="col-sm-2 form-label text-dark">{json.website}</label>
                                <div className="col-sm-8">
                                    <input type="text" className="form-control" id="Website" placeholder="your personal website"
                                        onChange={websiteChangeHandler}
                                        value={userDetails?.onlinePresence?.website ? userDetails.onlinePresence.website : ""} />
                                </div>
                            </div>
                            <div className="mb-4 row">
                                <label htmlFor="Other" className="col-sm-2 form-label text-dark">{json.other}</label>
                                <div className="col-sm-8">
                                    <input type="text" className="form-control" id="Other" onChange={otherChangeHandler}
                                        value={userDetails?.onlinePresence?.other ? userDetails.onlinePresence.other : ""} />
                                </div>
                            </div>

                        </div>

                    </div>
                    <button type="submit" onClick={submitHandler} className="btn btn-primary mb-2">{json.save}</button>


                </div>
            </div>
        </article>
    </>)
}

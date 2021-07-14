import React from "react";
import {useSelector} from "react-redux";
import {NavLink} from "react-router-dom";

import CTAButton from "../../UI/CTAButton/CTAButton";

import classes from "./Jumbotron.module.css";

const Jumbotron = () => {
    const firstName = useSelector(state => state.auth.firstName);

    return (
        <div className={classes.Jumbotron}>
            <video className={classes.Video} autoPlay loop muted>
                <source src="https://firebasestorage.googleapis.com/v0/b/one-energy-global.appspot.com/o/communityWork.mp4?alt=media&token=3151b58a-f414-4cb1-9686-9b9b28a1aa89" type="video/mp4" />
            </video>
            <h1>{firstName ? `Welcome, ${firstName}!` : "A Membership-Based, Mass Media Company"}</h1>
            <p>Transforming lives through Personal Development Media and Human Services.</p>
            <div className={classes.Buttons}>
                <button className={classes.LearnMore}><NavLink to="/volunteer">Get Involved</NavLink></button>
                <CTAButton path="/membership">Become A Member</CTAButton>
            </div>
        </div>
    );
}

export default Jumbotron;
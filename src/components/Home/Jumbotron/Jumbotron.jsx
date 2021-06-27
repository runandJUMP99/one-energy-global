import React from "react";
import {NavLink} from "react-router-dom";

import CTAButton from "../../UI/CTAButton/CTAButton";

import classes from "./Jumbotron.module.css";

const Jumbotron = () => {
    return (
        <div className={classes.Jumbotron}>
            <h1>A Membership-Based, Mass Media Company</h1>
            <p>Transforming lives through Personal Development Media and Human Services.</p>
            <div className={classes.Buttons}>
                <button className={classes.LearnMore}><NavLink to="/about">Get Involved</NavLink></button>
                <CTAButton path="/membership">Become A Member</CTAButton>
            </div>
        </div>
    );
}

export default Jumbotron;
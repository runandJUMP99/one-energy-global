import React from "react";
import {NavLink} from "react-router-dom";

import CTAButton from "../../UI/CTAButton/CTAButton";

import classes from "./Jumbotron.module.css";

const Jumbotron = () => {
    return (
        <div className={classes.Jumbotron}>
            <div className={classes.Text}>
                <h1>A Membership-Based, Mass Media Company</h1>
                <p>Transforming lives through Personal Development Media and Human Services.</p>
                <div className={classes.Buttons}>
                    <button className={classes.LearnMore}><NavLink to="/about">Learn More</NavLink></button>
                    <CTAButton path="/getinvolved">Get Involved</CTAButton>
                </div>
            </div>
        </div>
    );
}

export default Jumbotron;
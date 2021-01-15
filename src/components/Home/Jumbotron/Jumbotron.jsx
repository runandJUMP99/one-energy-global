import React from "react";
import {NavLink} from "react-router-dom";

import CTAButton from "../../UI/CTAButton/CTAButton";

import classes from "./Jumbotron.module.css";

const Jumbotron = () => {
    return (
        <div className={classes.Jumbotron}>
            <div className={classes.Text}>
                <h1>Making Wellness Simple</h1>
                <p>Advancing communities across the globe one community at a time</p>
                <div className={classes.Buttons}>
                    <button className={classes.LearnMore}><NavLink to="/about">Learn More</NavLink></button>
                    <CTAButton path="/getinvolved">Get Involved</CTAButton>
                </div>
            </div>
            <div className={classes.ImageGroup}>
                <div className={classes.ImageContainer}>
                    <img src="https://firebasestorage.googleapis.com/v0/b/one-energy-global.appspot.com/o/jumbotronImg.jpg?alt=media&token=60a5a05b-c02b-4f76-a52e-fb462b3c9907" alt="Mother and Daughter"/>
                </div>
                <div className={classes.Big}></div>
                <div className={classes.Medium}></div>
                <div className={classes.Small}></div>
            </div>
        </div>
    );
}

export default Jumbotron;
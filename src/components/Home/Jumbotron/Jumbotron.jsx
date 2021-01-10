import React from "react";

import CTAButton from "../../UI/CTAButton/CTAButton";

import classes from "./Jumbotron.module.css";

const Jumbotron = () => {
    return (
        <div className={classes.Jumbotron}>
            <div className={classes.Text}>
                <h1>Making Wellness Simple</h1>
                <p>Advancing Communities Across the Globe</p>
                <CTAButton>Learn More</CTAButton>
            </div>
        </div>
    );
}

export default Jumbotron;
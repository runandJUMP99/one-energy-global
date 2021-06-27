import React from "react";

import ButtonSecondary from "../../UI/ButtonSecondary/ButtonSecondary";

import classes from "./General.module.css";

const General = () => {
    return (
        <div className={classes.General}>
            <h2>General Volunteer</h2>
            <p>The <strong>General Volunteer</strong> position is created for people that aren't sure what department or team they fit in. We will assist you to find the best possible team for you.</p>
            <ButtonSecondary>Learn More</ButtonSecondary>
        </div>
    );
}

export default General;
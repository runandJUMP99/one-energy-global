import React from "react";

import Divider from "../../UI/Divider/Divider";

import classes from "./Intro.module.css";

const Intro = () => {
    return (
        <div className={classes.Intro}>
            <div className={classes.Content}>
                <h2>Our Vision</h2>
                <Divider />
                <img src="https://firebasestorage.googleapis.com/v0/b/one-energy-global.appspot.com/o/business-idea-growth.jpg?alt=media&token=e83bcd5b-88e3-41de-a025-4ec44ac8c121" alt="Business-Idea-Growth" />
                <p>Our vision is to be the largest family-based organization, preparing the younger generation and training a seasoned generation to fulfill purpose.</p>
            </div>
        </div>
    );
}

export default Intro;
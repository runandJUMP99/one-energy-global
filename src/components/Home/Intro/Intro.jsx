import React from "react";

import classes from "./Intro.module.css";

const Intro = () => {
    return (
        <div className={classes.Intro}>
            <h2>Our Mission</h2>
            <img src="https://firebasestorage.googleapis.com/v0/b/one-energy-global.appspot.com/o/business-idea-growth.jpg?alt=media&token=e83bcd5b-88e3-41de-a025-4ec44ac8c121" alt="Business-Idea-Growth" />
            <p>Our mission is to use every means of mass media to provide our members with <strong>personal development media</strong> and <strong>affordable services</strong>.</p>
        </div>
    );
}

export default Intro;
import React from "react";

import Education from "./Education/Education";
import Entertainment from "./Entertainment/Entertainment";
import Fitness from "./Fitness/Fitness";
import Intro from "./Intro/Intro";

import classes from "./About.module.css";

const About = () => {
    return (
        <div className={classes.About}>
            <Intro />
            <Education />
            <Entertainment />
            <Fitness />
        </div>
    );
}

export default About;
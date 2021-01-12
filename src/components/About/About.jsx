import React from "react";

import Divisions from "./Divisions/Divisions";
import Intro from "./Intro/Intro";

import classes from "./About.module.css";

const About = () => {
    return (
        <div className={classes.About}>
            <Intro />
            <Divisions />
        </div>
    );
}

export default About;
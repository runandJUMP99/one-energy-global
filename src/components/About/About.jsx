import React from "react";

import Departments from "./Departments/Departments";
import Jumbotron from "./Jumbotron/Jumbotron";
import Mission from "./Mission/Mission";

import classes from "./About.module.css";

const About = () => {
    return (
        <div className={classes.About}>
            <Jumbotron />
            <Mission />
            <Departments />
        </div>
    );
}

export default About;
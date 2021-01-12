import React from "react";

import Intro from "./Intro/Intro";

import classes from "./Projects.module.css";

const Projects = () => {
    return (
        <div className={classes.Projects}>
            <Intro />
        </div>
    );
}

export default Projects;
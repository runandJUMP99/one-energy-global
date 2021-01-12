import React from "react";

import classes from "./Intro.module.css";

const Intro = () => {
    return (
        <div className={classes.Intro}>
            <div className={classes.Text}>
                <h1>Our Projects</h1>
                <p>Our mission is to develop strategies that will improve the overall wellness of our communities across the globe by utilizing the resources around us as well as developing strong partnerships.</p>
            </div>
            <img src="https://cdn.pixabay.com/photo/2015/01/09/11/09/startup-594091_960_720.jpg" alt="Projects"/>
        </div>
    );
}

export default Intro;
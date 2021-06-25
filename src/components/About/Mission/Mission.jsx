import React from "react";

import Divider from "../../UI/Divider/Divider";

import classes from "./Mission.module.css";

const Mission = () => {
    return (
        <div className={classes.Mission}>
            <h2>Our Mission</h2>
            <Divider />
            <p>Our mission is to use every means of mass media to provide our members with personal development content and affordable services that will advance them so they can help advance others.</p>
        </div>
    );
}

export default Mission;
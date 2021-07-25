import React from "react";

import Divider from "../../UI/Divider/Divider";

import classes from "./Vision.module.css";

const Vision = () => {
    return (
        <div className={classes.Vision}>
            <div className={classes.Content}>
                <h2>Our Vision</h2>
                <Divider />
                <p>Our vision is to be the largest family-based organization, that is impactful through premier media production and global outreach.</p>
            </div>
        </div>
    );
}

export default Vision;
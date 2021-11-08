import React from "react";

import Divider from "../../UI/Divider/Divider";

import classes from "./Vision.module.css";

const Vision = () => {
    return (
        <div className={classes.Vision}>
            <div className={classes.Content}>
                <h2>Our Vision</h2>
                <Divider />
                <p>Our vision is to facilitate peace, opportunity, and possibility in a stagnant world.</p>
            </div>
        </div>
    );
}

export default Vision;
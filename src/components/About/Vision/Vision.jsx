import React from "react";

import Divider from "../../UI/Divider/Divider";

import classes from "./Vision.module.css";

const Vision = () => {
    return (
        <div className={classes.Vision}>
            <div className={classes.Content}>
                <h2>Our Vision</h2>
                <Divider />
                <img src="https://firebasestorage.googleapis.com/v0/b/one-energy-global.appspot.com/o/business-idea-growth.jpg?alt=media&token=e83bcd5b-88e3-41de-a025-4ec44ac8c121" alt="Business-Idea-Growth" />
                <p>Our vision is to be the largest family-based organization, that is impactful through premier media production and global outreach.</p>
            </div>
        </div>
    );
}

export default Vision;
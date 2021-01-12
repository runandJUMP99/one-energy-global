import React from "react";

import classes from "./Intro.module.css";

const Intro = () => {
    return (
        <div className={classes.Intro}>
            <div className={classes.IntroContent}>
                <div className={classes.Text}>
                    <h2>A Health and Wellness Company</h2>
                    <p>One Energy Global is a non-profit company that strengthens and develops communities through fitness, entertainment, health, and education projects. We are tirelessly committed to serving communities to advance wellness in multiple regions.</p>
                    <p>Unbalanced wellness within communities create costly health issues, spiraling economic issues, and disproportionately affects vulnerable communities. Therefore, we are driven by a passion to strategically eliminate these disparities worldwide.</p>
                </div>
                <img src="https://cdn.pixabay.com/photo/2020/05/18/16/17/social-media-5187243_960_720.png" alt="Intro Illustration"/>
            </div>
        </div>
    );
}

export default Intro;
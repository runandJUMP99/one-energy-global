import React from "react";

import Divider from "../../UI/Divider/Divider";

import classes from "./Investment.module.css";

const Investment = () => {
    return (
        <div className={classes.Investment}>
            <video className={classes.Video} autoPlay loop muted>
                <source src="https://firebasestorage.googleapis.com/v0/b/one-energy-global.appspot.com/o/businessMeeting.mp4?alt=media&token=7b65bef9-040e-4460-ad46-04104e75fb53" type="video/mp4" />
            </video>
            <div className={classes.Content}>
                <div className={classes.Text}>
                    <h2>Investment Insight</h2>
                    <div className={classes.Divider}></div>
                    <p>Donations are viewed as an investment in our work. We believe in transparency, we want you to know exactly how your contributions are making a difference in our efforts.</p>
                </div>
                <img src="https://firebasestorage.googleapis.com/v0/b/one-energy-global.appspot.com/o/Graph%402x.png?alt=media&token=ab5243fe-21de-4d25-b96e-aa618566cfe2" alt="Investment Graph" />
            </div>
        </div>
    );
}

export default Investment;
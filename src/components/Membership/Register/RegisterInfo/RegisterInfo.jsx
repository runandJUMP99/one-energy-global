import React from "react";

import Divider from "../../../UI/Divider/Divider";

import classes from "./RegisterInfo.module.css";

const RegisterInfo = ({tier}) => {
    let title = "Welcome Back!";

    if (tier === 1) {
        title = "Free Membership";
    } else if (tier === 2) {
        title = "Student Membership";
    } else if (tier === 3) {
        title = "Standard Membership";
    } else if (tier === 4) {
        title = "Family Bundle";
    }

    return (
        <div className={classes.RegisterInfo}>
            <h2>{title}</h2>
            <span className={classes.DividerSmall}><Divider /></span>
            <span className={classes.DividerLarge}><Divider style={{margin: "1rem 0"}} /></span>
            <p><em>You will now have access to exclusive One Energy Global content!</em></p>
        </div>
    );
}

export default RegisterInfo;
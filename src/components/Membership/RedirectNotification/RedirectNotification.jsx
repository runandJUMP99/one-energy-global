import React from "react";
import {NavLink} from "react-router-dom";

import classes from "./RedirectNotification.module.css";

const RedirectNotification = ({isResettingPassword, setIsResettingPassword, setIsSignedUp}) => {
    setTimeout(() => {
        setIsResettingPassword(false);
        setIsSignedUp(true);
    }, 4000);

    return (
        <div className={classes.RedirectNotification}>
            <div>
                <h3>{isResettingPassword ? "An email to reset your password has been sent!" : "Thank you for registering!"}</h3>
                <p>You will be redirected back to the home page shortly...</p>
            </div>
            <NavLink to="/">If you are not being redirected, click here!</NavLink>
        </div>
    );
}

export default RedirectNotification;
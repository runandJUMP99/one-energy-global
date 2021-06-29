import React, {useState} from "react";
import {NavLink} from "react-router-dom";

import classes from "./RedirectNotification.module.css";

const RedirectNotification = ({setIsRedirecting, setIsSignedUp}) => {
    setTimeout(() => {
        setIsRedirecting(false);
        setIsSignedUp(true);
    }, 3000);

    return (
        <div className={classes.RedirectNotification}>
            <div>
                <h3>Thank you for registering!</h3>
                <p>You will be redirected back to the home page shortly...</p>
            </div>
            <NavLink to="/">If you are not being redirected, click here!</NavLink>
        </div>
    );
}

export default RedirectNotification;
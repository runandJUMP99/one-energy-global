import React from "react";
import {NavLink} from "react-router-dom";

import classes from "./CTAButton.module.css";

const CTAButton = ({children, path}) => {
    return (
        <button className={classes.CTAButton}>
            <NavLink to={path}>{children}</NavLink>
        </button>
    );
}

export default CTAButton;
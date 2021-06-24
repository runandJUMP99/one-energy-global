import React from "react";
import {NavLink} from "react-router-dom";

import classes from "./CTAButton.module.css";

const CTAButton = ({children, path, style}) => {
    return (
        <button className={classes.CTAButton}>
            <NavLink className={classes.Link} to={path} style={style}>{children}</NavLink>
        </button>
    );
}

export default CTAButton;
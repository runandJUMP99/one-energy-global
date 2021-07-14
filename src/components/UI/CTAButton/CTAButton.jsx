import React from "react";
import {NavLink} from "react-router-dom";

import classes from "./CTAButton.module.css";

const CTAButton = ({children, onClick, path, style}) => {
    let content = (
        <button className={classes.CTAButton} onClick={onClick} style={style}>
            {children}
        </button>
    );

    if (path) {
        style = {
            ...style,
            padding: 0
        };
        content = (
            <button className={classes.CTAButton} onClick={onClick} style={style}>
                <NavLink to={path} style={{padding: "0.75rem 1.5rem"}}>{children}</NavLink>
            </button>
        );
    }

    return content;
}

export default CTAButton;
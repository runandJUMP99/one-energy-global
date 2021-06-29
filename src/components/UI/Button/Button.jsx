import React from "react";
import {NavLink} from "react-router-dom";

import classes from "./Button.module.css";

const Button = ({children, path, style}) => {
    let content = (
        <button className={classes.Button} style={style}>
            {children}
        </button>
    );
    
    if (path) {
        content = (
            <button className={classes.Button} style={style}>
                <NavLink to={path}>{children}</NavLink>
            </button>
        );
    }

    return content;
}

export default Button;
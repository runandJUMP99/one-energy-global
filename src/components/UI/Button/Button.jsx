import React from "react";
import {NavLink} from "react-router-dom";

import classes from "./Button.module.css";

const Button = ({children, onClick, path, style}) => {
    let content = (
        <button className={classes.Button} onClick={onClick} style={style}>
            {children}
        </button>
    );

    function handleClick() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }

    if (path) {
        style = {
            ...style,
            padding: 0
        };
        content = (
            <button className={classes.Button} onClick={handleClick} style={style}>
                <NavLink to={path} style={{padding: "0.75rem 1.5rem"}}>{children}</NavLink>
            </button>
        );
    }

    return content;
}

export default Button;
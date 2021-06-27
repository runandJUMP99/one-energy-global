import React from "react";

import classes from "./Button.module.css";

const Button = ({children, style}) => {
    return (
        <button className={classes.Button} style={style}>
            {children}
        </button>
    );
}

export default Button;
import React from "react";

import classes from "./ButtonSecondary.module.css";

const ButtonSecondary = (props) => {
    return (
        <button className={classes.ButtonSecondary} style={props.style}>
            {props.children}
        </button>
    );
}

export default ButtonSecondary;
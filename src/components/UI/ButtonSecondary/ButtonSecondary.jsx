import React from "react";

import classes from "./ButtonSecondary.module.css";

const ButtonSecondary = ({children, onClick, style}) => {
    return (
        <button className={classes.ButtonSecondary} onClick={onClick} style={style}>
            {children}
        </button>
    );
}

export default ButtonSecondary;
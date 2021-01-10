import React from "react";

import classes from "./CTAButton.module.css";

const CTAButton = (props) => {
    return (
        <button className={classes.CTAButton}>
            {props.children}
        </button>
    );
}

export default CTAButton;
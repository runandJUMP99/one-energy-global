import React from "react";

import classes from "./ToggleButton.module.css";

const ToggleButton = ({handleShow}) => {
    return(
        <div className={classes.ToggleButtonContainer}>
            <button className={classes.ToggleButton} onClick={handleShow}>
                <span className={classes.ToggleButton__bar}></span>
                <span className={classes.ToggleButton__bar}></span>
                <span className={classes.ToggleButton__bar}></span>
            </button>
        </div>
    );
}

export default ToggleButton;
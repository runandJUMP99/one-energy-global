import React from "react";

import classes from "./Divider.module.css";

const Divider = ({style}) => {
    return (
        <div className={classes.Divider} style={style}></div>
    );
}

export default Divider;
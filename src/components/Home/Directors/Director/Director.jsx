import React from "react";

import classes from "./Director.module.css";

const Director = ({name, title}) => {
    return (
        <div className={classes.Director}>
            <div className={classes.Divider}></div>
            <h3>{name}</h3>
            <p>{title}</p>
        </div>
    );
}

export default Director;
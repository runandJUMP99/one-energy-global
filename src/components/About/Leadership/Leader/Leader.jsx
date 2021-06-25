import React from "react";

import classes from "./Leader.module.css";

const Leader = ({img, name, title}) => {
    return (
        <div className={classes.Leader}>
            <img src={img} alt={name} />
            <h3>{name}</h3>
            <p>{title}</p>
        </div>
    );
}

export default Leader;
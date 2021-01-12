import React from "react";

import classes from "./Division.module.css";

const Division = ({description, img, name}) => {
    return (
        <div className={classes.Division}>
            <img src={img} alt={name} />
            <h3>{name}</h3>
            <p>{description}</p>
        </div>
    );
}

export default Division;
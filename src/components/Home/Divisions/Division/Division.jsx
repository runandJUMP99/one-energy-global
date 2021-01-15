import React from "react";
import {NavLink} from "react-router-dom";

import classes from "./Division.module.css";

const Division = ({description, img, name}) => {
    return (
        <div className={classes.Division}>
            <NavLink to="/about">
                <img src={img} alt={name} />
                <h3>{name}</h3>
                <p>{description}</p>
            </NavLink>
        </div>
    );
}

export default Division;
import React from "react";
import {NavLink} from "react-router-dom"

import classes from "./Link.module.css";

const Link = ({name, path}) => {
    return (
        <li className={classes.Link}>
            <NavLink to={path}>{name}</NavLink>
        </li>
    );
}

export default Link;
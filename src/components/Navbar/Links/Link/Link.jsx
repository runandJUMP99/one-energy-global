import React from "react";
import {NavLink} from "react-router-dom";

import classes from "./Link.module.css";

const Link = ({name, path, setShow}) => {
    return (
        <li className={classes.Link} onClick={() => setShow(false)}>
            <NavLink to={path}>{name}</NavLink>
        </li>
    );
}

export default Link;
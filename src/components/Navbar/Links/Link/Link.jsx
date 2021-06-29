import React from "react";
import {NavLink} from "react-router-dom";

import classes from "./Link.module.css";

const Link = ({name, path, setShow}) => {
    function handleClick() {
        if (setShow) {
            setShow()
        }
    }

    return (
        <li className={classes.Link} onClick={handleClick}>
            <NavLink to={path}>{name}</NavLink>
        </li>
    );
}

export default Link;
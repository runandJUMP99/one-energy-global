import React from "react";
import {NavLink} from "react-router-dom";

import classes from "./Link.module.css";

const Link = ({name, path, setShow}) => {
    function handleClick() {
        if (setShow) {
            setShow()
        }

        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }

    return (
        <li className={classes.Link}>
            <NavLink onClick={handleClick} to={path}>{name}</NavLink>
        </li>
    );
}

export default Link;
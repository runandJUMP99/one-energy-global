import React from "react";
import {NavLink} from "react-router-dom"

import classes from "./FooterLink.module.css";

const FooterLink = ({name, path}) => {
    function handleClick() { // scroll to top
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }

    return (
        <li className={classes.FooterLink}>
            <NavLink onClick={handleClick} to={path}>{name}</NavLink>
        </li>
    );
}

export default FooterLink;
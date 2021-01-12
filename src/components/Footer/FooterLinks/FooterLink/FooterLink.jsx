import React from "react";
import {NavLink} from "react-router-dom"

import classes from "./FooterLink.module.css";

const FooterLink = ({name, path}) => {
    return (
        <li className={classes.FooterLink}>
            <NavLink to={path}>{name}</NavLink>
        </li>
    );
}

export default FooterLink;
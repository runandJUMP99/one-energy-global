import React from "react";
import {NavLink} from "react-router-dom";

import classes from "./Logo.module.css";
import logo from "../../../assets/images/logo.png"

const Logo = () => {
    return (
        <NavLink to="/">
            <img className={classes.Logo} src={logo} alt="Logo" />
        </NavLink>
    );
}

export default Logo;
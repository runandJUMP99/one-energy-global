import React from "react";
import {NavLink} from "react-router-dom";

import classes from "./Logo.module.css";
import logo from "../../../assets/images/logo.png"

const Logo = ({setShow}) => {
    return (
        <NavLink to="/">
            <img
                alt="Logo"
                className={classes.Logo}
                onClick={() => setShow(false)}
                src={logo}
            />
        </NavLink>
    );
}

export default Logo;
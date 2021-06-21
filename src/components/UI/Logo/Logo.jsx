import React from "react";

import classes from "./Logo.module.css";
import logo from "../../../assets/images/logo.png"

const Logo = () => {
    return (
        <img className={classes.Logo} src={logo} alt="Logo" />
    );
}

export default Logo;
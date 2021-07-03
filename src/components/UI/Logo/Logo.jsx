import React from "react";
import {NavLink} from "react-router-dom";

import classes from "./Logo.module.css";
import logoDark from "../../../assets/images/logoDark.png"

const Logo = ({setShow}) => {
    function handleClick() {
        if (setShow) {
            setShow();
        }
    }
    
    return (
        <NavLink to="/">
            <img
                alt="Logo"
                className={classes.Logo}
                onClick={handleClick}
                src={logoDark}
            />
        </NavLink>
    );
}

export default Logo;
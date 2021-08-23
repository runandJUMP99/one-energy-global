import React from "react";
import {NavLink} from "react-router-dom";

import classes from "./Logo.module.css";
import logo from "../../../assets/images/logoBackground.png";

const Logo = ({setShow}) => {
    function handleClick() {
        if (setShow) {
            setShow();
        }

        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }
    
    return (
        <NavLink to="/">
            <img
                alt="Logo"
                className={classes.Logo}
                onClick={handleClick}
                src={logo}
            />
        </NavLink>
    );
}

export default Logo;
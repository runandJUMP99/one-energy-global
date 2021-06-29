import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {NavLink, useLocation} from "react-router-dom";

import classes from "./LoginLogout.module.css";
import {logout} from "../../../store/actions/auth";

const RegisterButtons = () => {
    const token = useSelector(state => state.auth.token);
    const path = useLocation().pathname;
    const dispatch = useDispatch();

    function handleClick() {
        dispatch(logout());
    }

    return (
        <div className={classes.LoginLogout}>
            {path === "/membership" 
                ? <NavLink to="/">Home</NavLink>
                : token
                ? <span onClick={handleClick}>Logout</span>
                : <NavLink to="/membership" >Login</NavLink>
            }
        </div>
    );
}

export default RegisterButtons;
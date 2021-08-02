import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {NavLink, useLocation} from "react-router-dom";

import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import classes from "./LoginLogout.module.css";
import {logout} from "../../../store/actions/auth";

const RegisterButtons = () => {
    const [isMouseOver, setIsMouseOver] = useState(false);
    const token = useSelector(state => state.auth.token);
    const path = useLocation().pathname;
    const dispatch = useDispatch();

    return (
        <div className={classes.LoginLogout}>
            {path === "/login" ? null : !token ? <NavLink className={classes.LoggedOut} to="/login" >Login</NavLink> //if user is on login page, do not show component
                : <div className={classes.LoggedIn} onMouseEnter={() => setIsMouseOver(true)} onMouseLeave={() => setIsMouseOver(false)}>
                    <NavLink to="/account" style={{left: isMouseOver && "3rem"}}><AccountCircleIcon /> Account</NavLink>
                    <p onClick={() => dispatch(logout())}>Logout</p>
                </div>
            }
        </div>
    );
}

export default RegisterButtons;
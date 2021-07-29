import React from "react";
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux"

import CloseIcon from '@material-ui/icons/Close';

import classes from "./AccountHeader.module.css";

const AccountHeader = () => {
    const firstName = useSelector(state => state.auth.firstName);

    return (
        <div className={classes.AccountHeader}>
            <h1>Hello, {firstName}</h1>
            <NavLink className={classes.CloseIcon} to="/">
                <CloseIcon fontSize="large" />
            </NavLink>
        </div>
    );
}

export default AccountHeader;
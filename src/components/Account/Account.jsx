import React, {useState} from "react";
import {Redirect} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import AccountHeader from "./AccountHeader/AccountHeader";
import Profile from "./Profile/Profile";
import SideMenu from "./SideMenu/SideMenu";

import classes from "./Account.module.css";
import {logout} from "../../store/actions/auth";

const Account = () => {
    const [currentDisplay, setCurrentDisplay] = useState(0);
    const token = useSelector(state => state.auth.token);
    const dispatch = useDispatch();
    const display = [<Profile />];

    return (
        <div className={classes.AccountContainer}>
            {!token && <Redirect to="/" />}
            <div className={classes.Account}>
                <AccountHeader />
                <div className={classes.AccountDisplay}>
                    <SideMenu currentDisplay={currentDisplay} setCurrentDisplay={setCurrentDisplay} />
                    <div className={classes.Display}>
                        {display[currentDisplay]}
                    </div>
                </div>
            </div>
            <button className={classes.Logout} onClick={() => dispatch(logout())}>Logout</button>
        </div>
    );
}

export default Account;
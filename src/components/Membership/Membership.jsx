import React from "react";

import Register from "./Register/Register";

import classes from "./Membership.module.css";

const Membership = () => {
    return (
        <div className={classes.Membership}>
            <Register />
        </div>
    );
}

export default Membership;
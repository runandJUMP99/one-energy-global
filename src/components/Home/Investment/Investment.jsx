import React from "react";

import Divider from "../../UI/Divider/Divider";

import classes from "./Investment.module.css";

const Investment = () => {
    return (
        <div className={classes.Investment}>
            <div className={classes.Text}>
                <h2>Investment Insight</h2>
                <Divider />
            </div>
        </div>
    );
}

export default Investment;
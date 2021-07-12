import React from "react";

import Subscribe from "../../Global/Newsletter/Subscribe/Subscribe";

import classes from "./Newsletter.module.css";

const Newsletter = () => {
    return (
        <div className={classes.Newsletter}>
            <h3>Sign up to our mailing list to receive updates on our latest projects!</h3>
            <Subscribe />
        </div>
    );
}
export default Newsletter;
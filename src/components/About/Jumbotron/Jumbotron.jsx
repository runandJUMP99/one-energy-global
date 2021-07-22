import React from "react";

import classes from "./Jumbotron.module.css";

const Jumbotron = () => {
    return (
        <div className={classes.Jumbotron}>
            <h1>About One Energy Global Inc.</h1>
            <h2>Membership-based, Mass Media Company</h2>
            <p><strong>Our Focus:</strong> Personal Development Media & Services</p>
        </div>
    );
}

export default Jumbotron;
import React from "react";

import classes from "./Jumbotron.module.css";

const Jumbotron = () => {
    return (
        <div className={classes.Jumbotron}>
            <h1>Be A Part of the Impact</h1>
            <p>If you're a <strong>talented, committed, service-oriented</strong> individual with extra time and want to see the <strong>direct impact</strong> of your contributions, apply for one of our volunteer opportunities below.</p>
        </div>
    );
}

export default Jumbotron;
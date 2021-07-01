import React from "react";

import Highlight from "./Highlight/Highlight";

import classes from "./Highlights.module.css";

const Highlights = () => {
    return (
        <div className={classes.Highlights}>
            <Highlight />
            <Highlight />
            <Highlight />
            <Highlight />
        </div>
    );
}

export default Highlights;
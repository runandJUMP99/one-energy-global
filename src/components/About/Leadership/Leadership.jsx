import React from "react";

import ExecutiveLeadership from "./ExecutiveLeadership/ExecutiveLeadership";

import classes from "./Leadership.module.css";

const Leadership = () => {
    return (
        <div className={classes.Leadership}>
            <ExecutiveLeadership />
        </div>
    );
}

export default Leadership;
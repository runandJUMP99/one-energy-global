import React from "react";

import BoardOfDirectors from "./BoardOfDirectors/BoardOfDirectors";
import ExecutiveLeadership from "./ExecutiveLeadership/ExecutiveLeadership";
import Management from "./Management/Management";

import classes from "./Leadership.module.css";

const Leadership = () => {
    return (
        <div className={classes.Leadership}>
            <ExecutiveLeadership />
            <Management />
            <BoardOfDirectors />
        </div>
    );
}

export default Leadership;
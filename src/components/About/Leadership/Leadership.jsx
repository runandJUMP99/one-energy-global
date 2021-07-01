import React from "react";

import BoardOfDirectors from "./BoardOfDirectors/BoardOfDirectors";
import ExecutiveLeadership from "./ExecutiveLeadership/ExecutiveLeadership";
import Management from "./Management/Management";

import classes from "./Leadership.module.css";
import leaders from "../../../assets/data/leadership";

const Leadership = () => {
    return (
        <div className={classes.Leadership}>
            <ExecutiveLeadership leaders={leaders.executiveLeadership} />
            <Management leaders={leaders.management} />
            <BoardOfDirectors leaders={leaders.boardOfDirectors} />
        </div>
    );
}

export default Leadership;
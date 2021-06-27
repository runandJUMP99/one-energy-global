import React from "react";

import Divider from "../../UI/Divider/Divider";
import Position from "../Position/Position";

import classes from "./Operations.module.css";

const Operations = () => {
    return (
        <div className={classes.Operations}>
            <h2>Operations</h2>
            <Divider />
            <div className={classes.Positions}>
                <Position 
                    description="This role is responsible for creating and organizing the organization’s content pipeline. The Content Officer oversees all marketing content initiatives, both internal and external, across multiple platforms and formats to drive engagement."
                    title="Chief Content Officer"
                />
                <Position 
                    description="This role is responsible for internal and external communication. He/she develops and oversees the respective structures including the public relations aspect within the organization."
                    title="Chief Communications Officer"
                />
            </div>
        </div>
    );
}

export default Operations;
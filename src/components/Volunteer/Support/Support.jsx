import React from "react";

import Divider from "../../UI/Divider/Divider";
import Position from "../Position/Position";

import classes from "./Support.module.css";

const Support = () => {
    return (
        <div className={classes.Support}>
            <h2>Support Positions</h2>
            <Divider />
            <div className={classes.Positions}>
                <Position 
                    description="This roll will focus on ensuring members have the most consistent, uninterrupted experience possible. They are also an expert at troubleshooting possible web and software issues."
                    title="Information & Technology"
                />
                <Position 
                    description="This role’s primary responsibility will be to manage calendars, organize meetings, take phone calls and messages, and may take care of travel arrangements depending on how often the executive travels."
                    title="Executive Assistant to Chairman & CEO"
                />
                <Position 
                    description="This role will be responsible for ensuring the we constantly improve and sustain our company culture."
                    title="Culture Coordinator"
                />
            </div>
        </div>
    );
}

export default Support;
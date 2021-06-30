import React from "react";

import Divider from "../../../../UI/Divider/Divider";

import classes from "./LeaderBio.moduel.css";

const LeaderBio  = ({bio, img, name, title}) => {
    return (
        <div className={classes.LeaderBio}>
            <h1>{name}</h1>
            <h3>{title}</h3>
            <Divider />
            <p>{bio}</p>
        </div>
    );
}

export default LeaderBio;
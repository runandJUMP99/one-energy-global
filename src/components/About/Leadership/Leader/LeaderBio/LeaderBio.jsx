import React from "react";

import Divider from "../../../../UI/Divider/Divider";
import Frame from "../../../../UI/Frame/Frame";

import classes from "./LeaderBio.module.css";

const LeaderBio  = ({bio1, bio2, img, name, title}) => {
    return (
        <div className={classes.LeaderBio}>
            <Frame />
            <img src={img} alt={name} />
            <h1>{name}</h1>
            <h3>{title}</h3>
            <Divider />
            <p>{bio1}</p>
            {bio2 && <p>{bio2}</p>}
        </div>
    );
}

export default LeaderBio;
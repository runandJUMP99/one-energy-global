import React from "react";

import Divider from "../../../../UI/Divider/Divider";

import classes from "./LeaderBio.module.css";

const LeaderBio  = ({bio1, bio2, img, name, title}) => {
    console.log(bio1, bio2);
    return (
        <div className={classes.LeaderBio}>
            <div className={classes.Frame}></div>
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
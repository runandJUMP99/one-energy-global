import React from "react";

import Divider from "../../UI/Divider/Divider";
import Position from "../Position/Position";

import classes from "./Support.module.css";

const Support = ({positions}) => {
    return (
        <div className={classes.Support}>
            <h2>Support Positions</h2>
            <Divider />
            <div className={classes.Positions}>
                {positions.map(position => (
                    <Position 
                        bullets={position.bullets}
                        descriptionLong={position.descriptionLong}
                        descriptionShort={position.descriptionShort}
                        title={position.title}
                    />
                ))}
            </div>
        </div>
    );
}

export default Support;
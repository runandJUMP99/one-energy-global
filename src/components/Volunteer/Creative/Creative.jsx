import React from "react";

import Divider from "../../UI/Divider/Divider";
import Position from "../Position/Position";

import classes from "./Creative.module.css";

const Creative = ({positions}) => {
    return (
        <div className={classes.Creative}>
            <h2>Creative Department</h2>
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

export default Creative;
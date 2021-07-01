import React from "react";

import Divider from "../../UI/Divider/Divider";
import Position from "../Position/Position";

import classes from "./Operations.module.css";

const Operations = ({positions}) => {
    return (
        <div className={classes.Operations}>
            <h2>Operations</h2>
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

export default Operations;
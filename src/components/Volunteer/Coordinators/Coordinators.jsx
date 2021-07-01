import React from "react";

import Divider from "../../UI/Divider/Divider";
import Position from "../Position/Position";

import classes from "./Coordinators.module.css";

const Coordinators = ({positions}) => {
    return (
        <div className={classes.Coordinators}>
            <h2>Volunteer Coordinators</h2>
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

export default Coordinators;
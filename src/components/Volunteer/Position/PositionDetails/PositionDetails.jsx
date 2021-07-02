import React from "react";

import Divider from "../../../UI/Divider/Divider";
import Frame from "../../../UI/Frame/Frame";

import classes from "./PositionDetails.module.css";

const PositionDetails = ({bullets, descriptionLong, title}) => {
    return (
        <div className={classes.PositionDetails}>
            <Frame />
            <h1>{title}</h1>
            <Divider />
            <div className={classes.Text}>
                <p>{descriptionLong}</p>
                <ul>
                    {bullets.map((bullet, index) => (
                        <li key={index}>{bullet}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default PositionDetails;
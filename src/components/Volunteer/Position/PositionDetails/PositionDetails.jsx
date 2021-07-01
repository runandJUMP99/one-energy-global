import React from "react";

import Divider from "../../../UI/Divider/Divider";

import classes from "./PositionDetails.module.css";

const PositionDetails = ({bullets, descriptionLong, title}) => {
    return (
        <div className={classes.PositionDetails}>
            <div className={classes.Frame}></div>
            <h1>{title}</h1>
            <Divider />
            <div className={classes.Text}>
                <p>{descriptionLong}</p>
                <ul>
                    {bullets.map(bullet => (
                        <li>{bullet}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default PositionDetails;
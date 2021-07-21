import React from "react";

import Button from "../../../UI/Button/Button";
import Divider from "../../../UI/Divider/Divider";
import Frame from "../../../UI/Frame/Frame";

import classes from "./PositionDetails.module.css";

const PositionDetails = ({bullets, descriptionLong, setModalContent, title}) => {
    function handleClick() {
        
    }

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
            <Button onClick={handleClick}>Volunteer</Button>
        </div>
    );
}

export default PositionDetails;
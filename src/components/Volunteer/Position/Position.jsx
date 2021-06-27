import React from "react";

import ButtonSecondary from "../../UI/ButtonSecondary/ButtonSecondary";

import classes from "./Position.module.css";

const Position = ({description, title}) => {
    return (
        <div className={classes.Position}>
            <h3>{title}</h3>
            <p>{description}</p>
            <ButtonSecondary>Learn More</ButtonSecondary>
        </div>
    );
}

export default Position;
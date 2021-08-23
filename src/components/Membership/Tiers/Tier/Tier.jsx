import React from "react";

import DoneOutlineIcon from '@material-ui/icons/DoneOutline';

import ButtonSecondary from "../../../UI/ButtonSecondary/ButtonSecondary";

import classes from "./Tier.module.css";

const Tier = ({description, handleNextStep, highlights, name, price, tier}) => {
    return (
        <div className={classes.Tier} style={{background: name === "Family Bundle" && "var(--highlight)", color: name === "Family Bundle" && "white"}}>
            <div className={classes.Top}>
                <h2>{name}</h2>
                {description && <p className={classes.Description}>*<em>{description}</em></p>}
                <p>{price}</p>
            </div>
            <ul>
                {highlights.map(highlight => (
                    <li key={highlight}>
                        <DoneOutlineIcon fontSize="small" style={{color: name === "Family Bundle" && "white"}} />
                        {highlight}
                    </li>
                ))}
            </ul>
            <ButtonSecondary>Coming Soon!</ButtonSecondary>
            {/* {name === "Family Bundle"
                ? <button className={classes.FamilyButton} onClick={() => handleNextStep(tier)}>Choose Plan</button>
                : <ButtonSecondary onClick={() => handleNextStep(tier)}>Choose Plan</ButtonSecondary>
            } */}
        </div>
    );
}

export default Tier;
import React from "react";

import DoneOutlineIcon from '@material-ui/icons/DoneOutline';

import ButtonSecondary from "../../../UI/ButtonSecondary/ButtonSecondary";

import classes from "./Tier.module.css";

const Tier = ({highlights, name, price}) => {
    return (
        <div className={classes.Tier} style={{background: name === "Family Bundle" && "var(--cta)", color: name === "Family Bundle" && "white"}}>
            <div className={classes.Top}>
                <h2>{name}</h2>
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
            {name === "Family Bundle"
                ? <button className={classes.FamilyButton}>Choose Plan</button>
                : <ButtonSecondary>Choose Plan</ButtonSecondary>
            }
        </div>
    );
}

export default Tier;
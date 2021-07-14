import React from "react";

import DoneOutlineIcon from '@material-ui/icons/DoneOutline';

import ButtonSecondary from "../../../UI/ButtonSecondary/ButtonSecondary";

import classes from "./Tier.module.css";

const Tier = ({highlights, name, price}) => {
    return (
        <div className={classes.Tier} style={{background: name === "Family" && "var(--cta)", color: name === "Family" && "white"}}>
            <div className={classes.Top}>
                <h2>{name}</h2>
                <p>{price}</p>
            </div>
            <ul>
                {highlights.map(highlight => (
                    <li key={highlight}>
                        <DoneOutlineIcon fontSize="small" style={{color: name === "Family" && "white"}} />
                        {highlight}
                    </li>
                ))}
            </ul>
            {name === "Family"
                ? <button>Choose Plan</button>
                : <ButtonSecondary>Choose Plan</ButtonSecondary>
            }
        </div>
    );
}

export default Tier;
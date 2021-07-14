import React from "react";

import Tier from "./Tier/Tier";

import classes from "./Tiers.module.css";
import tiers from "../../../assets/data/tiers";

const Tiers = () => {
    return (
        <div className={classes.Tiers}>
            {tiers.map(tier => (
                <Tier
                    highlights={tier.highlights}
                    name={tier.name}
                    price={tier.price}
                />
            ))}
        </div>
    );
}

export default Tiers;
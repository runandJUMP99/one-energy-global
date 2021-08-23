import React from "react";

import Tier from "./Tier/Tier";

import classes from "./Tiers.module.css";
import tiers from "../../../assets/data/tiers";

const Tiers = ({handleNextStep}) => {
    return (
        <div className={classes.Tiers}>
            {tiers.map(tier => (
                <Tier
                    key={tier.name}
                    description={tier.description}
                    handleNextStep={handleNextStep}
                    highlights={tier.highlights}
                    name={tier.name}
                    price={tier.price}
                    tier={tier.tier}
                />
            ))}
        </div>
    );
}

export default Tiers;
import React, {useState} from "react";

import Tiers from "./Tiers/Tiers";

import classes from "./Membership.module.css";

const Membership = () => {
    const [signupStep, setSignupStep] = useState(0);
    const signupSteps = [];
    
    return (
        <div className={classes.Membership}>
            <Tiers />
        </div>
    );
}

export default Membership;
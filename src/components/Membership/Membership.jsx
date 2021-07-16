import React, {useState} from "react";

import RedirectNotification from "./RedirectNotification/RedirectNotification";
import Register from "./Register/Register";
import Tiers from "./Tiers/Tiers";

import classes from "./Membership.module.css";

const Membership = () => {
    const [signupStep, setSignupStep] = useState(0);
    const [tier, setTier] = useState(null);
    const signupSteps = [
        <Tiers handleNextStep={handleNextStep} />,
        <Register handleNextStep={handleNextStep} newUser={true} tier={tier} />,
        <RedirectNotification handleNextStep={handleNextStep} />
    ];

    function handleNextStep(clickedTier) {
        if (clickedTier) {
            setTier(clickedTier);
        }

        setSignupStep(prevStep => prevStep + 1);
    }

    return (
        <div className={classes.Membership}>
            {signupSteps[signupStep]}
        </div>
    );
}

export default Membership;
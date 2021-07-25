import React, {useState} from "react";
import {Redirect} from "react-router-dom";

import Payment from "./Payment/Payment";
import RedirectNotification from "./RedirectNotification/RedirectNotification";
import Register from "./Register/Register";
import Tiers from "./Tiers/Tiers";
import Timer from "../UI/Timer/Timer";

import classes from "./Membership.module.css";

const Membership = () => {
    const [isResettingPassword, setIsResettingPassword] = useState(false);
    const [isSignedUp, setIsSignedUp] = useState(false);
    const [signupStep, setSignupStep] = useState(0);
    const [tier, setTier] = useState(null);
    const signupSteps = [
        <Tiers handleNextStep={handleNextStep} />,
        <Register handleNextStep={handleNextStep} isResettingPassword={isResettingPassword} newUser={true} setIsResettingPassword={setIsResettingPassword} tier={tier} />,
        <Payment handleNextStep={handleNextStep} tier={tier} />,
        <RedirectNotification handleNextStep={handleNextStep} setIsResettingPassword={setIsResettingPassword} setIsSignedUp={setIsSignedUp} />
    ];

    function handleNextStep(clickedTier) {
        if (clickedTier) {
            setTier(clickedTier);
        }
        setSignupStep(prevStep => prevStep + 1);
    }

    return (
        <div className={classes.Membership}>
            {isSignedUp && <Redirect to="/" />} {/* redirects back to home page if user is logged in */}
            <div className={classes.Text}>
                <h1>Meet OneEnergy+</h1>
                <h6>The Home of Personal Development Content & Services</h6>
                <img src="https://firebasestorage.googleapis.com/v0/b/one-energy-global.appspot.com/o/OneEnergyPlus.PNG?alt=media&token=bc7de9b5-96c7-42a7-b726-686b86dae94c" alt="One Energy Plus" />
                <p>Public Applications will open August 27th!</p>
            </div>
            <Timer />
            {signupSteps[signupStep]}
        </div>
    );
}

export default Membership;
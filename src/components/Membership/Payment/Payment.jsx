import React from "react";

import Button from "../../UI/Button/Button";

import classes from "./Payment.module.css";

const Payment = ({handleNextStep, tier}) => {
    if (tier === 1){
        handleNextStep();
    }

    return (
        <div className={classes.Payment}>
            Payment
            <Button onClick={handleNextStep}>Submit</Button>
        </div>
    );
}

export default Payment;
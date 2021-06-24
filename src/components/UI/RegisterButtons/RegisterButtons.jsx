import React from "react";

import CTAButton from "../../UI/CTAButton/CTAButton";

import classes from "./RegisterButtons.module.css";

const RegisterButtons = () => {
    return (
        <div className={classes.RegisterButtons}>
            <CTAButton path="/membership" style={{fontSize: "1rem", padding: "0.25rem 0.5rem"}}>Sign Up!</CTAButton>
            <span>/</span>
            <button className={classes.Login}>Login</button>
        </div>
    );
}

export default RegisterButtons;
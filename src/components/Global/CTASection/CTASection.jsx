import React from "react";

import Button from "../../UI/Button/Button";

import classes from "./CTASection.module.css";

const CTASection = () => {
    return (
        <div className={classes.CTASection}>
            <div className={classes.Backdrop}></div>
            <div className={classes.Text}>
                <h1>None of this would be possible without the donations and contributions of our members and volunteers.</h1>
                <p>Find out how you can make an impact.</p>
                <Button style={{marginRight: "1rem"}}>Get Involved</Button>
                <Button style={{marginLeft: "1rem"}}>Sow A Seed</Button>
            </div>
        </div>
    );
}

export default CTASection;
import React from "react";

import Coordinators from "./Coordinators/Coordinators";
import Creative from "./Creative/Creative";
import CTASection from "../Global/CTASection/CTASection";
import General from "./General/General";
import Jumbotron from "./Jumbotron/Jumbotron";
import Newsletter from "../Global/Newsletter/Newsletter";
import Operations from "./Operations/Operations";
import SupportPositions from "./Support/Support";

import classes from "./Volunteer.module.css";

const Volunteer = () => {
    return (
        <div className={classes.Volunteer}>
            <Jumbotron />
            <General />
            <Operations />
            <SupportPositions />
            <Coordinators />
            <Creative />
            <CTASection />
            <Newsletter />
        </div>
    );   
}

export default Volunteer;
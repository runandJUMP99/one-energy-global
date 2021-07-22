import React from "react";

import CTASection from "../Global/CTASection/CTASection";
import Newsletter from "../Global/Newsletter/Newsletter";
import Departments from "./Departments/Departments";
import Jumbotron from "./Jumbotron/Jumbotron";
import Leadership from "./Leadership/Leadership";
import Mission from "./Mission/Mission";
import Vision from "./Vision/Vision";

import classes from "./About.module.css";

const About = () => {
    return (
        <div className={classes.About}>
            <Jumbotron />
            <Mission />
            <Vision />
            <Leadership />
            <Departments />
            <CTASection />
            <Newsletter />
        </div>
    );
}

export default About;
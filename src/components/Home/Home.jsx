import React from "react";

import CTASection from "../Global/CTASection/CTASection";
import CultureCode from "./CultureCode/CultureCode";
import Directors from "./Directors/Directors";
import Highlights from "./Highlights/Highlights";
import Investment from "./Investment/Investment";
import Jumbotron from "./Jumbotron/Jumbotron";
import Mission from "./Mission/Mission";
import Newsletter from "../Global/Newsletter/Newsletter";
import SocialResp from "./SocialResp/SocialResp";
import Volunteer from "./Volunteer/Volunteer";

import classes from "./Home.module.css";

const Home = () => {
    return (
        <div className={classes.Home}>
            <Jumbotron />
            <Highlights />
            <Mission />
            <CultureCode />
            <SocialResp />
            <Volunteer />
            <Investment />
            <Directors />
            <CTASection />
            <Newsletter />
        </div>
    );
}

export default Home;
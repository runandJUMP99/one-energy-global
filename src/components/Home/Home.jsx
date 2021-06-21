import React from "react";

import CultureCode from "./CultureCode/CultureCode";
import Directors from "./Directors/Directors";
import Intro from "./Intro/Intro";
import Investment from "./Investment/Investment";
import Jumbotron from "./Jumbotron/Jumbotron";
import SocialResp from "./SocialResp/SocialResp";
import Volunteer from "./Volunteer/Volunteer";

import classes from "./Home.module.css";

const Home = () => {
    return (
        <div className={classes.Home}>
            <Jumbotron />
            <Intro />
            <CultureCode />
            <SocialResp />
            <Volunteer />
            <Investment />
            <Directors />
        </div>
    );
}

export default Home;
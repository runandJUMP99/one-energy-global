import React from "react";

import Directors from "./Directors/Directors";
import Divisions from "./Divisions/Divisions";
import Founders from "./Founders/Founders";
import Intro from "./Intro/Intro";
import Jumbotron from "./Jumbotron/Jumbotron";

import classes from "./Home.module.css";

const Home = () => {
    return (
        <div className={classes.Home}>
            <Jumbotron />
            <Intro />
            <Divisions />
            <Founders />
            <Directors />
        </div>
    );
}

export default Home;
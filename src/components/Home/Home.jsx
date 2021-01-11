import React from "react";

import Directors from "./Directors/Directors";
import Founders from "./Founders/Founders";
import Jumbotron from "./Jumbotron/Jumbotron";

import classes from "./Home.module.css";

const Home = () => {
    return (
        <div className={classes.Home}>
            <Jumbotron />
            <Founders />
            <Directors />
        </div>
    );
}

export default Home;
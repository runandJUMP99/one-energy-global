import React from "react";

import Founders from "./Founders/Founders";
import Jumbotron from "./Jumbotron/Jumbotron";

import classes from "./Home.module.css";

const Home = () => {
    return (
        <div className={classes.Home}>
            <Jumbotron />
            <Founders />
        </div>
    );
}

export default Home;
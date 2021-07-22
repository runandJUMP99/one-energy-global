import React from "react";

import Divider from "../../UI/Divider/Divider";

import classes from "./Mission.module.css";

const Mission = () => {
    return (
        <div className={classes.Mission}>
            <h2>Our Mission</h2>
            <Divider />
            <p>Our mission is to use our resources to spark thoughtfulness, curiosity, and imagination in the world through culturally diverse, groundbreaking storytelling.</p>
            <p>In addition, our outreach is commissioned to be the hands and feet in our communities by organizing towards healthier people, a healthier environment, and helping individuals maximize their potential and discover their purpose.</p>
        </div>
    );
}

export default Mission;
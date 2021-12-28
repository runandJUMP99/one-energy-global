import React from "react";

import Divider from "../../UI/Divider/Divider";

import classes from "./Mission.module.css";

const Mission = () => {
  return (
    <div className={classes.Mission}>
      <div className={classes.MissionContent}>
        <h2>Our Mission</h2>
        <Divider />
        <p>
          Our mission is to spark hope through premier media production and
          global outreach.
        </p>
      </div>
    </div>
  );
};

export default Mission;

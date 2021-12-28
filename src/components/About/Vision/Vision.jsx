import React from "react";

import Divider from "../../UI/Divider/Divider";

import classes from "./Vision.module.css";

const Vision = () => {
  return (
    <div className={classes.Vision}>
      <div className={classes.Content}>
        <h2>Our Vision</h2>
        <Divider />
        <p>
          Our vision is to spread peace, opportunity and possibility worldwide.
        </p>
      </div>
    </div>
  );
};

export default Vision;

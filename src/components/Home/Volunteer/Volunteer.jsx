import React from "react";

import Button from "../../UI/Button/Button";

import classes from "./Volunteer.module.css";

const Volunteer = () => {
    return (
        <div className={classes.Volunteer}>
            <div className={classes.Text}>
                <h2>Join our Volunteer Family Today</h2>
                <Button>Learn More</Button>
            </div>
            <img src="https://firebasestorage.googleapis.com/v0/b/one-energy-global.appspot.com/o/VolunteerGraphic.png?alt=media&token=9d1761bf-dc5b-485f-a236-abf71451f1ef" alt="Business Meeting" />
        </div>
    );
}

export default Volunteer;
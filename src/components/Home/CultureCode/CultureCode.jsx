import React from "react";

import Button from "../../UI/Button/Button";

import classes from "./CultureCode.module.css";

const CultureCode = () => {
    return (
        <div className={classes.CultureCode}>
            <div className={classes.Text}>
                <h2>Culture Code:</h2>
                <p><strong>THE NUMBER ONE THING</strong> we value here at One Energy Global is a culture of <strong>family.</strong> Our primary culture goal is to facilitate ways to bring individuals and communities together. Listed below is the list of internal values we have at OEG.</p>
                <p>OUR CORE VALUES</p>
                <ul>
                    <li><strong>Family</strong> is our foundation</li>
                    <li><strong>Love</strong> is our commitment</li>
                    <li><strong>Service</strong> is our heart</li>
                    <li><strong>Develoment</strong> is our purpose</li>
                    <li><strong>Quality</strong> is our promise</li>
                    <li><strong>Generosity</strong> is our impact</li>
                </ul>
                <Button path="/about" style={{marginLeft: 0}}>Learn More</Button>
            </div>
            <img src="https://firebasestorage.googleapis.com/v0/b/one-energy-global.appspot.com/o/workplace-team-business-meeting.jpg?alt=media&token=014f980e-2908-4bd0-b356-b2fde1aca2c1" alt="Business Meeting" />
        </div>
    );
}

export default CultureCode;
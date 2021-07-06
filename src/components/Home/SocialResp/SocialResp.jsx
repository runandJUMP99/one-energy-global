import React from "react";

import Button from "../../UI/Button/Button";

import classes from "./SocialResp.module.css";

const SocialResp = () => {
    return (
        <div className={classes.SocialResp}>
            <img src="https://firebasestorage.googleapis.com/v0/b/one-energy-global.appspot.com/o/SocialResp.jpg?alt=media&token=e2113c21-99e7-4a7a-b5ce-2cf460823f31" alt="Business Meeting" />
            <div className={classes.Text}>
                <h2>Social Responsibility</h2>
                <p>Our social responsibility is centered around <strong>community development</strong> through <strong>human services</strong>. We are effectively improving these communities through <strong>grassroots volunteer mobilization</strong>.</p>
                <p>To increase our capacity we believe strongly in partnership. By establishing relationships with <strong>local churches, leaders, organizations, and governments in regions across the world,</strong> we make a direct impact in improving society in everyone's backyard.</p>
                <Button path="/volunteer" style={{marginRight: 0}}>Get Involved</Button>
            </div>
        </div>
    );
}

export default SocialResp;
import React from "react";

import Divider from "../../../UI/Divider/Divider";
import Frame from "../../../UI/Frame/Frame";

import classes from "./Donate.module.css";

const Donate = () => {
    return (
        <div className={classes.Donate}>
            <Frame />
            <h2>Thank you for Supporting Our Vision!</h2>
            <Divider />
            <p>We consider you a partner, and it is because of your generosity that we are able to see communities and our member's lives change.</p>
            <div className={classes.Buttons}>
                <button>
                    <a className={classes.PayPal} target="_blank" rel="noopener noreferrer" href="https://paypal.me/oneenergyglobal">
                        <i className="fab fa-paypal"></i>PayPal
                    </a>
                </button>
                <button>
                    <a className={classes.CashApp} target="_blank" rel="noopener noreferrer" href="https://cash.app/$oeglobal">
                        <i className="fas fa-dollar-sign"></i>Cash App
                    </a>
                </button>
            </div>
        </div>
    );
}

export default Donate;
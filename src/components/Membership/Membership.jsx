import React, {useState} from "react";

import Register from "./Register/Register";

import classes from "./Membership.module.css";

const Membership = () => {
    const [isRedirecting, setIsRedirecting] = useState(false);
    
    return (
        <div className={classes.Membership}>
            {!isRedirecting &&
                <div className={classes.Text}>
                    <h1>Support our Effort!</h1>
                    <p>You are joining a global family of people who want to change the world and progress in maximizing their being.</p>
                    <ul>
                        <li>Unlimited access to stream up to two pillars of content (Shows: Coming soon!)</li>
                        <li>Access to attend one workshop</li>
                        <li>Access to attend one networking event</li>
                    </ul>
                </div>
            }
            <Register isRedirecting={isRedirecting} setIsRedirecting={setIsRedirecting} />
        </div>
    );
}

export default Membership;
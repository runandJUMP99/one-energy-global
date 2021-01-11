import React from "react";

import FooterBottom from "./FooterBottom/FooterBottom";
import FooterContacts from "./FooterContacts/FooterContacts";
import FooterLinks from "./FooterLinks/FooterLinks";
import Newsletter from "./Newsletter/Newsletter";

import classes from "./Footer.module.css";

const Footer = () => {
    return (
        <div className={classes.Footer}>
            <div className={classes.MainContent}>
                <Newsletter />
                <FooterContacts />
                <FooterLinks />
            </div>
            <FooterBottom />
        </div>
    );
}

export default Footer;
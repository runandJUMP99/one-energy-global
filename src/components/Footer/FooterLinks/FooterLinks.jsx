import React from "react";

import FooterLink from "./FooterLink/FooterLink";

import classes from "./FooterLinks.module.css";

const FooterLinks = () => {
    return (
        <ul className={classes.FooterLinks}>
            <FooterLink name="Home" />
            <FooterLink name="About" />
            <FooterLink name="Contact" />
            <FooterLink name="Get Involved" />
        </ul>
    );
}

export default FooterLinks;
import React from "react";

import FooterLink from "./FooterLink/FooterLink";

import classes from "./FooterLinks.module.css";

const FooterLinks = () => {
    return (
        <ul className={classes.FooterLinks}>
            <FooterLink name="Home" path="/" />
            <FooterLink name="About"path="/about" />
            <FooterLink name="Volunteer"path="/volunteer" />
            <FooterLink name="Membership"path="/membership" />
            <FooterLink name="Contact"path="/contact" />
        </ul>
    );
}

export default FooterLinks;
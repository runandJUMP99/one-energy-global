import React from "react";

import FooterLink from "./FooterLink/FooterLink";

import classes from "./FooterLinks.module.css";

const FooterLinks = () => {
    return (
        <ul className={classes.FooterLinks}>
            <FooterLink name="Home" path="/" />
            <FooterLink name="About"path="/about" />
            <FooterLink name="Contact"path="/contact" />
            <FooterLink name="Get Involved"path="/getinvolved" />
        </ul>
    );
}

export default FooterLinks;
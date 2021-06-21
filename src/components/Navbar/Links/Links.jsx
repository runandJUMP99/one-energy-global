import React from "react";

import CTAButton from "../../UI/CTAButton/CTAButton";
import Link from "./Link/Link";

import classes from "./Links.module.css";

const Links = () => {
    return (
        <ul className={classes.Links}>
            <Link name="Home" path="/" />
            <Link name="About" path="/about" />
            <Link name="Volunteer" path="/volunteer" />
            <Link name="Membership" path="/membership" />
            <Link name="Contact" path="/contact" />
            <CTAButton path="/donate">Sow A Seed</CTAButton>
        </ul>
    );
}

export default Links;
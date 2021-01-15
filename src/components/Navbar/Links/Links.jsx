import React from "react";

import CTAButton from "../../UI/CTAButton/CTAButton";
import Link from "./Link/Link";

import classes from "./Links.module.css";

const Links = () => {
    return (
        <ul className={classes.Links}>
            <Link name="Home" path="/" />
            <Link name="About" path="/about" />
            <Link name="Projects" path="/projects" />
            <Link name="Contact" path="/contact" />
            <CTAButton path="/getinvolved">Get Involved</CTAButton>
        </ul>
    );
}

export default Links;
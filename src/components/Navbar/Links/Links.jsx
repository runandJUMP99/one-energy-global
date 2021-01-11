import React from "react";

import CTAButton from "../../UI/CTAButton/CTAButton";
import Link from "./Link/Link";

import classes from "./Links.module.css";

const Links = () => {
    return (
        <ul className={classes.Links}>
            <Link name="Home" path="/" />
            <Link name="About" path="/about" />
            <Link name="Get Involved" path="/getinvolved" />
            <Link name="Projects" path="/projects" />
            <Link name="Contact" path="/contact" />
            <CTAButton>Take Action</CTAButton>
        </ul>
    );
}

export default Links;
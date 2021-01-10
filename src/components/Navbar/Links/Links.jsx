import React from "react";

import CTAButton from "../../UI/CTAButton/CTAButton";
import Link from "./Link/Link";

import classes from "./Links.module.css";

const Links = () => {
    return (
        <ul className={classes.Links}>
            <Link name="Home" />
            <Link name="About" />
            <Link name="Get Involved" />
            <Link name="Projects" />
            <Link name="Contact" />
            <CTAButton>Take Action</CTAButton>
        </ul>
    );
}

export default Links;
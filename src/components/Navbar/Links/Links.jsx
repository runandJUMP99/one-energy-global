import React from "react";

import Link from "./Link/Link";
import Logo from "../../UI/Logo/Logo";
import RegisterButtons from "../../UI/RegisterButtons/RegisterButtons";

import classes from "./Links.module.css";

const Links = () => {
    return (
        <ul className={classes.Links}>
            <Link name="About" path="/about" />
            <Link name="Volunteer" path="/volunteer" />
            <Logo />
            <Link name="Membership" path="/membership" />
            <Link name="Contact" path="/contact" />
            <RegisterButtons />
        </ul>
    );
}

export default Links;
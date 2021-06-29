import React from "react";

import Link from "./Link/Link";
import Logo from "../../UI/Logo/Logo";

import classes from "./Links.module.css";

const Links = ({setShow}) => {
    return (
        <ul className={classes.Links}>
            <Link name="About" path="/about" setShow={setShow} />
            <Link name="Volunteer" path="/volunteer" setShow={setShow} />
            <div className={classes.Logo}>
                <Logo />
            </div>
            <Link name="Membership" path="/membership" setShow={setShow} />
            <Link name="Contact" path="/contact" setShow={setShow} />
        </ul>
    );
}

export default Links;
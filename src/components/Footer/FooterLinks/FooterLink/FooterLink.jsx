import React from "react";

import classes from "./FooterLink.module.css";

const FooterLink = ({name}) => {
    return (
        <li className={classes.FooterLink}>
            {name}
        </li>
    );
}

export default FooterLink;
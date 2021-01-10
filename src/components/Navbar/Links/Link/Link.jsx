import React from "react";

import classes from "./Link.module.css";

const Link = ({name}) => {
    return (
        <li className={classes.Link}>
            {name}
        </li>
    );
}

export default Link;
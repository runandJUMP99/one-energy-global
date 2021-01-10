import React from "react";

import classes from "./Founder.module.css";

const Founder = ({description, img, name, title, socials}) => {
    return (
        <div className={classes.Founder}>
            <img src={img} alt="Profile"/>
            <h2>{name}</h2>
            <p>{title}</p>
            <div>{socials}</div>
            <p>{description}</p>
        </div>
    );
}

export default Founder;
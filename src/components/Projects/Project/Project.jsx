import React from "react";

import classes from "./Project.module.css";

const Project = ({description, img, name}) => {
    return (
        <div className={classes.Project}>
            <img src={img} alt={name}/>
            <h3>{name}</h3>
            <p>{description}</p>
        </div>
    );
}

export default Project;
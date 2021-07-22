import React from "react";

import Button from "../../../UI/Button/Button";

import classes from "./Department.module.css";

const Department = ({description, img, title}) => {
    return (
        <div className={classes.Department}>
            <div className={classes.Text}>
                <h3>{title}</h3>
                <p>{description}</p>
                <Button path="/volunteer" style={{margin: "1rem 0.5rem 1rem 0"}}>Get Involved</Button>
            </div>
            <img src={img} alt={title} />
        </div>
    );
}

export default Department;
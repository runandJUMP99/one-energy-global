import React from "react";

import Button from "../../../UI/Button/Button";

import classes from "./DepartmentReverse.module.css";

const DepartmentReverse = ({description, img, title}) => {
    return (
        <div className={classes.DepartmentReverse}>
            <img src={img} alt={title} />
            <div className={classes.Text}>
                <h3>{title}</h3>
                <p>{description}</p>
                <Button path="/volunteer" style={{margin: "1rem 0 1rem 0.5rem"}}>Get Involved</Button>
            </div>
        </div>
    );
}

export default DepartmentReverse;
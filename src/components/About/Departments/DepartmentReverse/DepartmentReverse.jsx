import React from "react";

import classes from "./DepartmentReverse.module.css";

const DepartmentReverse = ({description, img, title}) => {
    return (
        <div className={classes.DepartmentReverse}>
            <img src={img} alt={title} />
            <div className={classes.Text}>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default DepartmentReverse;
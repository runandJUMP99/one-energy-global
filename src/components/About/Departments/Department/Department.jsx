import React from "react";

import classes from "./Department.module.css";

const Department = ({description, img, reverse, title}) => {
    return (
        <div className={classes.Department} style={{flexDirection: reverse && "row-reverse"}}>
            <div className={classes.Text}>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
            <img src={img} alt={title} />
        </div>
    );
}

export default Department;
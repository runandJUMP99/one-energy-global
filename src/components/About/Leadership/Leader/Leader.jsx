import React from "react";

import classes from "./Leader.module.css";

const Leader = ({img, name, title}) => {
    function handleClick() {
        console.log("clicked");
    }

    if (!img) {
        img = "https://firebasestorage.googleapis.com/v0/b/one-energy-global.appspot.com/o/logo.jpg?alt=media&token=92ce1143-9800-40c5-b3f5-0c50140275d3";
    }

    return (
        <div className={classes.Leader}>
            <img onClick={handleClick} src={img} alt={name} />
            <h3 onClick={handleClick}>{name}</h3>
            <p><em>{title}</em></p>
        </div>
    );
}

export default Leader;
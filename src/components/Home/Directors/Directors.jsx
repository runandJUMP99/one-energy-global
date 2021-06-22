import React from "react";

import Director from "./Director/Director";

import classes from "./Directors.module.css";

const Directors = () => {
    return (
        <div className={classes.Directors}>
            <h1>Our Board of Directors</h1>
            <div className={classes.DirectorsGroup}>
                <Director name="Nasaiah Hopkins" title="Chairman" />
                <Director name="Grace Amponsah" title="Treasurer" />
                <Director name="Caleb Duah" title="Board Member" />
                <Director name="Marcanthony Lozano" title="Board Member" />
                <Director name="Marc Caccavelli" title="Board Member" />
                <Director name="Heather Lagone" title="Board Member" />
                <Director name="Tamara Cooper" title="Board Member" />
            </div>
        </div>
    );
}

export default Directors;
import React from "react";

import Divider from "../../../UI/Divider/Divider";
import Leader from "../Leader/Leader";

import classes from "./ExecutiveLeadership.module.css";

const ExecutiveLeadership = () => {
    return (
        <div className={classes.ExecutiveLeadership}>
            <h2>Executive Leadership</h2>
            <Divider />
            <div className={classes.Leaders}>
                <Leader 
                    img=""
                    name="Nasaiah Izon Hoskins"
                    title="Chairman and Chief Executive Officer, One Energy Global Inc."
                />
                <Leader 
                    img=""
                    name="Caleb Duah"
                    title="Chief Experience Officer, One Energy Global Inc."
                />
            </div>
        </div>
    );
}

export default ExecutiveLeadership;
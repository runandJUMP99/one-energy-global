import React from "react";

import Divider from "../../../UI/Divider/Divider";
import Leader from "../Leader/Leader";

import classes from "./Management.module.css";

const Management = () => {
    return (
        <div className={classes.Management}>
            <h2>Management</h2>
            <Divider />
            <div className={classes.Leaders}>
                <Leader 
                    img="https://firebasestorage.googleapis.com/v0/b/one-energy-global.appspot.com/o/RedmondZuri.jpeg?alt=media&token=79e95ba4-a958-41cd-804a-8389d69795a3"
                    name="Zuri Redmond"
                    title="Public Relations Manager, One Energy Global Inc."
                />
                <Leader 
                    img="https://firebasestorage.googleapis.com/v0/b/one-energy-global.appspot.com/o/NeuhalfenAlexandra.jpg?alt=media&token=ffe02b9a-3846-438b-8e8f-f922bfbd2393"
                    name="Alexandra Neuhalfen"
                    title="Creative Team Lead, One Energy Imagination"
                />
                <Leader 
                    img=""
                    name="James Williams"
                    title="Track & Field Commissioner, One Energy Sports"
                />
            </div>
        </div>
    );
}

export default Management;
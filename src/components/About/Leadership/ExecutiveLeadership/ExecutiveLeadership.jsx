import React from "react";

import Divider from "../../../UI/Divider/Divider";
import Leader from "../Leader/Leader";

import classes from "./ExecutiveLeadership.module.css";

const ExecutiveLeadership = ({leaders}) => {
    return (
        <div className={classes.ExecutiveLeadership}>
            <h2>Executive Leadership</h2>
            <Divider />
            <div className={classes.Leaders}>
                {leaders.map(leader => (
                    <Leader
                        key={leader.name}
                        bio1={leader.bio1}
                        bio2={leader.bio2}
                        img={leader.img}
                        name={leader.name}
                        title={leader.title}
                    />
                ))}
            </div>
        </div>
    );
}

export default ExecutiveLeadership;
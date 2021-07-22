import React from "react";

import Divider from "../../../UI/Divider/Divider";
import Leader from "../Leader/Leader";

import classes from "./BoardOfDirectors.module.css";

const BoardOfDirectors = ({leaders}) => {
    return (
        <div className={classes.BoardOfDirectors}>
            <h2>Board of Directors</h2>
            <Divider />
            <p>The Board of Directors is a group of experts who are invested in the long-term success of the organization. The directors rise from global industries, which makes their knowledge, experience, and perspective that much more valuable.</p>
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

export default BoardOfDirectors;
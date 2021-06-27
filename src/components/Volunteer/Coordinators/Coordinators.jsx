import React from "react";

import Divider from "../../UI/Divider/Divider";
import Position from "../Position/Position";

import classes from "./Coordinators.module.css";

const Coordinators = () => {
    return (
        <div className={classes.Coordinators}>
            <h2>Volunteer Coordinators</h2>
            <Divider />
            <div className={classes.Positions}>
                <Position 
                    description="Partnered with another lead animator, this role will co-lead the animation department to bring the organization’s vision to life."
                    title="Co-Lead Animator"
                />
                <Position 
                    description="This role will lead the graphics team to bring out the most engaging, visual presence to our members and community."
                    title="Graphic Team Lead"
                />
                <Position 
                    description="This role will lead a social media team to keep our members and community informed and engaged with all of the organization’s endeavors."
                    title="Social Media Team Lead"
                />
                <Position 
                    description="This role will lead a team of writers in developing scripted content for shows, social media, blogs, and more."
                    title="Script Team Lead"
                />
                <Position 
                    description="This role is responsible for any video editing coming from the organization. You will lead a team of editors to edit shows, social media content, commercials, and more."
                    title="Video Editing Team Lead"
                />
                <Position 
                    description="This role will oversee the organization’s overall audio quality. They will assist in producing a recording or a live performance, mixing, reproduction, and more."
                    title="Sound Coordinator"
                />
                <Position 
                    description="This role is the director of all organization production. They will oversee anything related to audio or visual tasks."
                    title="Production Lead"
                />
            </div>
        </div>
    );
}

export default Coordinators;
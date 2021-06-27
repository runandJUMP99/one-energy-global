import React from "react";

import Divider from "../../UI/Divider/Divider";
import Position from "../Position/Position";

import classes from "./Creative.module.css";

const Creative = () => {
    return (
        <div className={classes.Creative}>
            <h2>Creative Department</h2>
            <Divider />
            <div className={classes.Positions}>
                <Position 
                    description="This role would be a member of the video editing team. They may be assigned to social media edits, show edits, and more."
                    title="Video Editors"
                />
                <Position 
                    description="This role would be a member of the writing team. They are responsible for content creation from scripted shows to marketing concepts."
                    title="Script Writers"
                />
                <Position 
                    description="This role would be members of the One Energy Global Cast and are actors or hosts of a One Energy Global show."
                    title="Cast"
                />
                <Position 
                    description="This role would assemble together images, typography, or motion graphics to create a piece of design. The core responsibility of the designer is to present information in a way that is both accessible and memorable."
                    title="Graphic Deigners"
                />
                <Position 
                    description="This role would only be suited for an individual who has experience in web and/or mobile app development."
                    title="Web and App Designers"
                />
                <Position 
                    description="This role would focus on creating, publishing, and distributing content for our members and community. They would focus particularly on promoting our platform and shows."
                    title="Content Marketing Specialist"
                />
                <Position 
                    description="This role will focus on creating, publishing, and distributing outreach efforts to our members and community to keep them informed on the organization’s projects."
                    title="Outreach Marketing Specialist"
                />
            </div>
        </div>
    );
}

export default Creative;
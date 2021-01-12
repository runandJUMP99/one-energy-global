import React from "react";

import Intro from "./Intro/Intro";
import Project from "./Project/Project";

import classes from "./Projects.module.css";

const Projects = () => {
    return (
        <div className={classes.Projects}>
            <Intro />
            <div className={classes.ProjectsGroup}>
                <Project
                    description="The Philadelphia Wellness Project is an initiative to ensure the upmost wellness in Philadelphia region. Please visit our project website to learn more about the impact we're making in this community!"
                    img="https://oneenergyglobal.org/wp-content/uploads/2020/08/philadelphia-city-downtown-70850.jpg"
                    name="Philadelphia Wellness Project"
                />
                <Project
                    description="All over the world there are communities that are not exposed to the benefits of physical activity. Our Born to Run campaign addresses many areas, including physical activity and anti-racism promotion. Please visit our campaign website to learn more about the impact we are making with this project."
                    img="https://oneenergyglobal.org/wp-content/uploads/2020/12/running-biking-outdoor-1081694.jpg"
                    name="Born to Run Campaign"
                />
                <Project
                    description="League in development. No publi information for this project has been released yet. Please stay tuned for more udpates."
                    img="https://oneenergyglobal.org/wp-content/uploads/2020/08/athletic-field-ground-lane-1867053.jpg"
                    name="Professional Track and Field League"
                />
                <Project
                    description="The creative laboratory of OEG entertainment, lead by our innovative and talented team of volunteers and staff that are driven to engineer imagination through groundbreaking storytelling. This is where our creative content is designed."
                    img="https://oneenergyglobal.org/wp-content/uploads/2020/12/meeting.jpg"
                    name="One Energy Imagination"
                />
            </div>
        </div>
    );
}

export default Projects;
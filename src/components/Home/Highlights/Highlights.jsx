import React from "react";

import AssignmentIcon from '@material-ui/icons/Assignment';
import CastForEducationIcon from '@material-ui/icons/CastForEducation';
import ClassIcon from '@material-ui/icons/Class';
import HearingIcon from '@material-ui/icons/Hearing';

import Highlight from "./Highlight/Highlight";

import classes from "./Highlights.module.css";

const Highlights = () => {
    return (
        <div className={classes.Highlights}>
            <div className={classes.HighlightGroup}>
                <Highlight
                    active={false}
                    icon={<HearingIcon fontSize="large" />}
                    locked={true}
                    subtitle="Inspiration for your ears"
                    title="Podcasts"
                />
                <Highlight
                    active={false}
                    icon={<CastForEducationIcon fontSize="large" />}
                    locked={true}
                    subtitle="Both online & in person"
                    title="Tutoring"
                />
            </div>
            <div className={classes.HighlightGroup}>
                <Highlight
                    active={false}
                    icon={<AssignmentIcon fontSize="large" />}
                    locked={true}
                    subtitle="Available for all ages"
                    title="Counseling"
                />
                <Highlight
                    active={false}
                    icon={<ClassIcon fontSize="large" />}
                    locked={true}
                    subtitle="Learn from our best"
                    title="Master Class"
                />
            </div>
        </div>
    );
}

export default Highlights;
import React from "react";

import Division from "./Division/Division";

import classes from "./Divisions.module.css";

const Divisions = () => {
    return (
        <div className={classes.Divisions}>
            <div className={classes.DivisionGroup}>
                <Division 
                    description="We are curating free, family-friendly content centered around three pillars: Motivation, Inspiration, and Thoughtfulness."
                    img="https://firebasestorage.googleapis.com/v0/b/one-energy-global.appspot.com/o/drum-set.svg?alt=media&token=e1ede723-d070-49e8-9473-d74ff511bcfa"
                    name="Through Entertainment"
                />
                <Division 
                    description="We are creatively and efficiently educating families about the importance of wellness. In our education efforts, we will also be raising awareness about health disparities & promotions."
                    img="https://firebasestorage.googleapis.com/v0/b/one-energy-global.appspot.com/o/presentation.svg?alt=media&token=998e47fc-c45a-41a4-a8e7-63c2e926a5c9"
                    name="Through Education"
                />
                <Division 
                    description="We are improving the lives of groups and communities that lack resources for their health."
                    img="https://firebasestorage.googleapis.com/v0/b/one-energy-global.appspot.com/o/barbell.svg?alt=media&token=9d2bb6ea-d8e0-4c96-adf9-7b7d796c2363"
                    name="Through Fitness"
                />
            </div>
        </div>
    );
}

export default Divisions;
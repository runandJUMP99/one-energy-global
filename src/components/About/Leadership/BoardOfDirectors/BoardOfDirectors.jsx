import React from "react";

import Divider from "../../../UI/Divider/Divider";
import Leader from "../Leader/Leader";

import classes from "./BoardOfDirectors.module.css";

const BoardOfDirectors = () => {
    return (
        <div className={classes.BoardOfDirectors}>
            <h2>Board of Directors</h2>
            <Divider />
            <div className={classes.Leaders}>
                <Leader 
                    img="https://firebasestorage.googleapis.com/v0/b/one-energy-global.appspot.com/o/HoskinsNasaiah.jpg?alt=media&token=5e73a4dc-4b4f-4629-9a34-513d5b06be8f"
                    name="Nasaiah Izon Hoskins"
                    title="Chairman and Chief Executive Officer, One Energy Global Inc."
                />
                <Leader 
                    img="https://firebasestorage.googleapis.com/v0/b/one-energy-global.appspot.com/o/DuahCaleb.jpg?alt=media&token=99738ee3-0798-4d76-b0bd-c1cc4ab50be2"
                    name="Caleb Duah"
                    title="Chief Experience Officer, One Energy Global Inc."
                />
            </div>
            <Divider />
            <div className={classes.Leaders}>
                <Leader 
                    img="https://firebasestorage.googleapis.com/v0/b/one-energy-global.appspot.com/o/AmponsahGrace.png?alt=media&token=802caa60-3e07-49df-9dc7-9be9a7957811"
                    name="Grace Amponsah"
                    title="Treasurer"
                />
                <Leader 
                    img="https://firebasestorage.googleapis.com/v0/b/one-energy-global.appspot.com/o/LagoneHeather.jpg?alt=media&token=376c3649-00a6-44dd-9f90-71cd496d6df4"
                    name="Heather Lagone"
                    title="Director"
                />
            </div>
            <Divider />
            <div className={classes.Leaders}>
                <Leader 
                    img=""
                    name="Marc Caccavelli"
                    title="Director"
                />
                <Leader 
                    img="https://firebasestorage.googleapis.com/v0/b/one-energy-global.appspot.com/o/LozanoMarc.jpg?alt=media&token=9791a0a2-8675-41a9-87b8-c2f71774ae10"
                    name="Marc Lozano"
                    title="Director"
                />
                <Leader 
                    img=""
                    name="Tamara Cooper"
                    title="Director"
                />
            </div>
        </div>
    );
}

export default BoardOfDirectors;
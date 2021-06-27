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
                    img="https://firebasestorage.googleapis.com/v0/b/one-energy-global.appspot.com/o/HoskinsNasaiah.jpg?alt=media&token=5e73a4dc-4b4f-4629-9a34-513d5b06be8f"
                    name="Nasaiah Izon Hoskins"
                    title="Chairman and Chief Executive Officer, One Energy Global Inc."
                />
                <Leader 
                    img="https://firebasestorage.googleapis.com/v0/b/one-energy-global.appspot.com/o/DuahCaleb.jpg?alt=media&token=99738ee3-0798-4d76-b0bd-c1cc4ab50be2"
                    name="Caleb Duah"
                    title="Chief Experience Officer, One Energy Global Inc."
                />
                <Leader 
                    img=""
                    name="Diane Henry"
                    title="Chief Human Resource Officer, One Energy Global Inc."
                />
                <Leader 
                    img=""
                    name="Mimi Staton"
                    title="Chief Recruitment & Volunteer Officer, One Energy Global Inc."
                />
                <Leader 
                    img="https://firebasestorage.googleapis.com/v0/b/one-energy-global.appspot.com/o/CatalanoPaul.jpg?alt=media&token=4f3e68dd-9c72-4f34-b8d6-1f40e0e6f9ae"
                    name="Paul Catalano"
                    title="Senior Vice President One Energy Sports"
                />
            </div>
        </div>
    );
}

export default ExecutiveLeadership;
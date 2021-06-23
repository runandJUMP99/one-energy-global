import React from "react";

import Department from "./Department/Department";
import Divider from "../../UI/Divider/Divider";

import classes from "./Departments.module.css";

const Departments = () => {
    return (
        <div className={classes.Departments}>
            <h2>Our Departments</h2>
            <Divider />
            <Department
                description="Led by an innovative team of experts <strong>(volunteers and staff)<strong/>, our operations team handles the day-to-day business of OEG, ensuring that the organization sustains growth and momentum. Falling under operations, we have: <strong>Membership, Social Impact, Human Resources, Partnerships, Communications, Recruitment, Finances, Facilities, and Information Technology.<strong/>"
                img="https://firebasestorage.googleapis.com/v0/b/one-energy-global.appspot.com/o/Operations.jpg?alt=media&token=c14d1520-5515-4b4b-9540-74323e48bb92"
                title="Operations"
            />
            <Department
                description="This is the creative laboratory of OEG led by our innovative and talented team of volunteers and staff that are driven to engineer imagination through groundbreaking shows and overall jaw-dropping creativity. Falling under the Creative Department, we have: Production (editing, audio, lighting, etc.), Animation, Graphic Design, and Cast Members."
                img="https://firebasestorage.googleapis.com/v0/b/one-energy-global.appspot.com/o/CreativeDepartment.jpg?alt=media&token=1e02ae55-29bc-4f7d-8411-12557b73d510"
                reverse={true}
                title="Creative Department"
            />
            <Department
                description="Our Special Projects Department covers events and shows that consist of a major collaboration across departments, such as special show releases, our sports leagues, and other major events in the organization. Our special projects take an incredible amount of planning. Often times our special projects schedule is planned a year in advance. Reach out if you want us to bring a special project to your city!"
                img="https://firebasestorage.googleapis.com/v0/b/one-energy-global.appspot.com/o/SpecialProjects.jpg?alt=media&token=08aa299d-1092-4ffa-a823-97b92b8748db"
                title="Special Projects"
            />
        </div>
    );
}

export default Departments;
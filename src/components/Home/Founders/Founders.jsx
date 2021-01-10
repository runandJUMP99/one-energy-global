import React from "react";

import Founder from "./Founder/Founder";

import classes from "./Founders.module.css";

const Founders = () => {
    return (
        <div className={classes.Founders}>
            <Founder 
                description="Caleb is Co-founder, President & Co-CEO of One Energy Global Inc. A passion for social impact has led him to social entrepreneurship. Caleb is a speaker in spiritual development, personal development and leadership as well as an entrepreneur. He is currently pursuing his Masters Degree in Urban Public Health to further advance his career in social entrepreneurship."
                img="https://oneenergyglobal.org/wp-content/uploads/2020/08/IMG-0557-768x1024.jpg"
                name="Caleb Duah"
                socials="Fb, Twit, Insta, Linked, YT"
                title="President & Co-CEO"
            />
            <Founder 
                description="Nasaiah Izon Hoskins is Co-Founder, Chairman & Co-CEO of One Energy Global Inc. Hoskins is an entrepreneur, thought leader, environmentalist, umanitarian, and social engineer. Nasaiah is a student at East Stroudsburg University studying Public Communication & Advocacy. Hoskins has served and lead several boards and committees. He si the former Youth Vice Chairman of the NAACP, National Youth Work Committee where he led the 30,000 member division. Nasaiah believes we have more in common than what separates us. His goal is to be a global leader, where he believes the collaborative efforts of nations can end global crises "
                img="https://oneenergyglobal.org/wp-content/uploads/2020/12/MEOEG.jpeg"
                name="Nasaiah Hoskins"
                socials="Fb, Linked, Insta"
                title="Chairman & Co-CEO"
            />
        </div>
    );
}

export default Founders;
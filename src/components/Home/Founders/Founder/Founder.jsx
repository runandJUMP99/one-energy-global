import React from "react";

import classes from "./Founder.module.css";

const Founder = ({description, img, name, title, socials}) => {
    return (
        <div className={classes.Founder}>
            <img src={img} alt="Profile"/>
            <h2>{name}</h2>
            <p>{title}</p>
            <div className={classes.SocialLinks}>
                {socials.map(social => (
                    <p><a target="_blank" rel="noopener noreferrer" href={social.link}>{social.icon}</a></p>
                ))}
            </div>
            <p>{description}</p>
        </div>
    );
}

export default Founder;
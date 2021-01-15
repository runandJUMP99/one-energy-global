import React from "react";

import FacebookIcon from '@material-ui/icons/Facebook';
import Founder from "./Founder/Founder";
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';

import classes from "./Founders.module.css";

const Founders = () => {
    return (
        <div className={classes.Founders}>
            <Founder 
                description="Nasaiah Izon Hoskins is Co-Founder, Executive Chairman & Co-CEO of One Energy Global Inc. Hoskins is an entrepreneur, thought leader, environmentalist, umanitarian, and social engineer. Nasaiah is a student at East Stroudsburg University studying Public Communication & Advocacy. Hoskins has served and lead several boards and committees. He si the former Youth Vice Chairman of the NAACP, National Youth Work Committee where he led the 30,000 member division. Nasaiah believes we have more in common than what separates us. His goal is to be a global leader, where he believes the collaborative efforts of nations can end global crises "
                img="https://oneenergyglobal.org/wp-content/uploads/2020/12/MEOEG.jpeg"
                name="Nasaiah Hoskins"
                socials={[
                    {icon: <FacebookIcon />, link: "https://www.facebook.com/nasaiah.hoskins.3"},
                    {icon: <LinkedInIcon />, link: "http://www.linkedin.com/in/nasaiah-hoskins-85948a171"},
                    {icon: <InstagramIcon />, link: "http://www.instagram.com/nasaiahizonhoskins"}
                ]}
                title="Executive Chairman & Chairman of the Board of Directors"
            />
            <Founder 
                description="Caleb is Co-founder, President & Co-CEO of One Energy Global Inc. A passion for social impact has led him to social entrepreneurship. Caleb is a speaker in spiritual development, personal development and leadership as well as an entrepreneur. He is currently pursuing his Masters Degree in Urban Public Health to further advance his career in social entrepreneurship."
                img="https://oneenergyglobal.org/wp-content/uploads/2020/08/IMG-0557-768x1024.jpg"
                name="Caleb Duah"
                socials={[
                    {icon: <FacebookIcon />, link: "http://www.facebook.com/iamcalebduah"},
                    {icon: <TwitterIcon />, link: "https://twitter.com/caleb_duah"},
                    {icon: <LinkedInIcon />, link: "http://www.instagram.com/calebduah"},
                    {icon: <InstagramIcon />, link: "http://www.linkedin.com/in/calebduah"},
                    {icon: <YouTubeIcon />, link: "https://www.youtube.com/channel/UC8KFdkiqf5MIxrzjDao7R-Q"}
                ]}
                title="President & Co-CEO"
            />
        </div>
    );
}

export default Founders;
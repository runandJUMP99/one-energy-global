import React from "react";

// import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
// import TwitterIcon from '@material-ui/icons/Twitter';
// import YouTubeIcon from '@material-ui/icons/YouTube';

import ButtonSecondary from "../../UI/ButtonSecondary/ButtonSecondary";

import classes from "./Newsletter.module.css";

const Newsletter = () => {
    return (
        <div className={classes.Newsletter}>
            <h2>Keep up to date on our current projects by subscribing to our newsletter!</h2>
            <ButtonSecondary>Subscribe</ButtonSecondary>
            <div className={classes.Socials}>
                {/* <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/oneenergyglobalinc"><FacebookIcon className={classes.Social} fontSize="large" /></a> */}
                {/* <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/oneenergyglobe"><TwitterIcon className={classes.Social} fontSize="large" /></a> */}
                <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/company/one-energy-global-inc"><LinkedInIcon className={classes.Social} fontSize="large" /></a>
                <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/oneenergyglobal/"><InstagramIcon className={classes.Social} fontSize="large" /></a>
                {/* <a href="https://www.youtube.com/channel/UC8j5NZsonOPKr6Ez1x6B3kQ"><YouTubeIcon className={classes.Social} fontSize="large" /></a> */}
                
            </div>
        </div>
    );
}

export default Newsletter;
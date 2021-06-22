import React from "react";

import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';

import ButtonSecondary from "../../UI/ButtonSecondary/ButtonSecondary";

import classes from "./Newsletter.module.css";

const Newsletter = () => {
    return (
        <div className={classes.Newsletter}>
            <h2>Keep up to date on our current projects by subscribing to our newsletter!</h2>
            <ButtonSecondary>Subscribe</ButtonSecondary>
            <div className={classes.Socials}>
                <FacebookIcon className={classes.Social} fontSize="large" />
                <TwitterIcon className={classes.Social} fontSize="large" />
                <LinkedInIcon className={classes.Social} fontSize="large" />
                <InstagramIcon className={classes.Social} fontSize="large" />
                <YouTubeIcon className={classes.Social} fontSize="large" />
            </div>
        </div>
    );
}

export default Newsletter;
import React from "react";

import EmailIcon from '@material-ui/icons/Email';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import PhoneIcon from '@material-ui/icons/Phone';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';

import classes from "./FooterContacts.module.css";

const FooterContacts = () => {
    return (
        <div className={classes.FooterContacts}>
            <h3>Contact Us</h3>
            <div className={classes.ContactUs}>
                <p><QueryBuilderIcon />Monday - Friday: 9:00 am - 5:00 pm</p>
                <p><a href="mailto:info@oneenergyglobal.org"><EmailIcon />info@oneenergyglobal.org</a></p>
                <p><a href="tel:570-431-9530" ><PhoneIcon />(570) 431-9530</a></p>
                <div className={classes.SocialLinks}>
                    <p><a className={classes.SocialLink} target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/oneenergyglobalinc"><FacebookIcon /></a></p>
                    <p><a className={classes.SocialLink} target="_blank" rel="noopener noreferrer" href="https://twitter.com/oneenergyglobe"><TwitterIcon /></a></p>
                    <p><a className={classes.SocialLink} target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/channel/UC8j5NZsonOPKr6Ez1x6B3kQ"><YouTubeIcon /></a></p>
                    <p><a className={classes.SocialLink} target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/company/one-energy-global-inc"><LinkedInIcon /></a></p>
                    <p><a className={classes.SocialLink} target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/oneenergyglobal/"><InstagramIcon /></a></p>
                </div>                
            </div>
        </div>
    );
}

export default FooterContacts;
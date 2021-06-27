import React from "react";

import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';

import classes from "./ContactInfo.module.css";

const ContactInfo = () => {
    return (
        <div className={classes.ContactInfo}>
            <h2>Contact Us</h2>
            <p>For all media, project, or general inquiries, please contact us!</p>
            <p>Business Hours: Mon-Fri (9-5pm)</p>
            <a href="mailto:info@oneenergyglobal.org"><EmailIcon />info@oneenergyglobal.org</a>
            <a href="tel:570-431-9530"><PhoneIcon />(570) 431-9530</a>
        </div>
    );
}

export default ContactInfo;
import React from "react";

import ContactInfo from "./ContactInfo/ContactInfo";
import Form from "./Form/Form";
import Jumbotron from "./Jumbotron/Jumbotron";

// import ReCAPTCHA from "react-google-recaptcha";
// import emailjs from "emailjs-com";

import classes from "./Contact.module.css";

const Contact  = () => {
    return (
        <div className={classes.Contact}>
            <Jumbotron />
            <div className={classes.ContactInfo}>
                <ContactInfo />
                <Form />
            </div>
        </div>
    );
}

export default Contact;
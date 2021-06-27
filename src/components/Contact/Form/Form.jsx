import React from "react";
import {useForm, FormProvider} from "react-hook-form";

import {Grid} from "@material-ui/core";

import Button from "../../UI/Button/Button";
import Input from "../../UI/Input/Input";

import classes from "./Form.module.css";

const Form = () => {
    const methods = useForm();
    
    function handleSubmit(data) {
        console.log(data);  
    }

    return (
        <div className={classes.Form}>
            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit((data) => handleSubmit(data))}>
                    <Grid container spacing={3}>
                        <Input required name="name" label="Name" size={12} variant="filled" />
                        <Input required name="email" label="Email" size={12} variant="filled" />
                        <Input required name="phone" label="Phone Number" size={12} variant="filled" />
                        <Input required name="message" label="Message" multiline={true} size={12} variant="filled" />
                    </Grid>
                    <Button style={{marginLeft: 0}}>Send Message</Button>
                </form>
            </FormProvider>
        </div>
    );
}

export default Form;


// emailjs.send("cthru_inspections", "template_j8u25if", formData, process.env.REACT_APP_EMAILJS_KEY)
//     .then(res => {
//         const updatedMessageForm = {
//             ...messageForm
//         };

//         for (let key in updatedMessageForm) {
//             updatedMessageForm[key].value = "";
//         }

//         setMessageForm(updatedMessageForm);
//         setMessage("Your message has been delivered. Thank you!");
//         setMessageSent(true);
//         setIsLoading(false);
//     }, err => {
//         console.log('FAILED...', err);

//         const updatedMessageForm = {
//             ...messageForm
//         };

//         for (let key in updatedMessageForm) {
//             updatedMessageForm[key].value = "";
//         }

//         setMessageForm(updatedMessageForm);
//         setMessage("Uh oh! There was an error delivering your message. Please try again.");
//         setIsLoading(false);
//         setFormIsValid(false);
//         setCaptcha(false);
//     });
// <ReCAPTCHA sitekey={process.env.REACT_APP_SITE_KEY} onChange={handleCaptcha} />
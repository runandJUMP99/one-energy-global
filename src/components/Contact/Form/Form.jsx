import React, {useState} from "react";
import {useForm, FormProvider} from "react-hook-form";
import emailjs from "emailjs-com";

import {Grid} from "@material-ui/core";

import Button from "../../UI/Button/Button";
import Input from "../../UI/Input/Input";
import Spinner from "../../UI/Spinner/Spinner";

import classes from "./Form.module.css";

const Form = () => {
    const [error, setError] = useState(false);
    const [message, setMessage] = useState("");
    const [sending, setSending] = useState(false);
    const methods = useForm();
    
    function handleSubmit(data) {
        setSending(true);

        emailjs.send("oneEnergyGlobalInc", "template_b2c228g", data, process.env.REACT_APP_EMAILJS_KEY)
            .then(res => {
                setError(false);
                setMessage("Your message has been delivered. Thank you!");
                setSending(false);
            }, err => {
                console.log('FAILED...', err);
                
                setError(true);
                setMessage("Uh oh! There was an error delivering your message. Please try again.");
                setSending(false);
            });
    }

    return (
        <div className={classes.Form}>
            {sending ? <Spinner /> : message ?
                <div className={classes.Confirm}>
                    <p>{message}</p>
                    {!error && <img src="https://firebasestorage.googleapis.com/v0/b/c-thru-inspections.appspot.com/o/sent.png?alt=media&token=cc258008-f3f1-4219-aba7-ba6cae989daf" alt="Message Sent" />}
                </div> :
                <FormProvider {...methods}>
                    <form onSubmit={methods.handleSubmit((data) => handleSubmit(data))}>
                        <Grid container spacing={3}>
                            <Input required name="name" label="Name" size={12} variant="filled" />
                            <Input required name="email" label="Email" size={12} type="email" variant="filled" />
                            <Input required name="phone" label="Phone Number" size={12} variant="filled" />
                            <Input required name="message" label="Message" multiline={true} size={12} variant="filled" />
                        </Grid>
                        <Button style={{marginLeft: 0}}>Send Message</Button>
                    </form>
                </FormProvider>
            }
        </div>
    );
}

export default Form;



// <ReCAPTCHA sitekey={process.env.REACT_APP_RECAPTCHA_KEY} onChange={handleCaptcha} />
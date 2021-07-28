import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux"
import {NavLink, Redirect} from "react-router-dom";

import {TextField, Typography} from "@material-ui/core";

import Button from "../../../UI/Button/Button";
import Payment from "./Payment/Payment";
import Spinner from "../../../UI/Spinner/Spinner";

import classes from "./RegisterForm.module.css";
import {register, resetPassword} from "../../../../store/actions/auth";
//signInWithGoogle can be imported from ... ../auth

const RegisterForm = ({handleNextStep, isResettingPassword, isNewUser, setIsResettingPassword, tier}) => {
    const [emailSent, setEmailSent] = useState(false);
    const [isPaying, setIsPaying] = useState(false);
    const [isSignedUp, setIsSignedUp] = useState(false); //this is only for returning users
    const [userData, setUserData] = useState({
        email: "",
        firstName: "",
        lastName: "",
        password: "",
        phone: "",
        tier: tier
    });
    const error = useSelector(state => state.auth.error);
    const loading = useSelector(state => state.auth.loading)
    const dispatch = useDispatch();

    function handleSubmit(event) {
        event.preventDefault();

        if (!isPaying && tier > 0) {
            setIsPaying(true);
        } else {
            if (isResettingPassword) {
                dispatch(resetPassword(userData.email));
                setEmailSent(true);
                setIsResettingPassword(false);
            } else {
                setEmailSent(false);
                // dispatch(register(isNewUser, setIsSignedUp, userData));
    
                if (isNewUser) {
                    handleNextStep();
                }
            }
            
            setUserData({
                email: "",
                firstName: "",
                lastName: "",
                password: "",
                phone: "",
                tier: null
            });
        }

    }

    return (
        <div className={classes.RegisterForm}>
            {isSignedUp && <Redirect to="/" />}
            {loading ? <Spinner /> : isPaying ? <Payment /> 
                : <>
                    <Typography align="center" variant="h6">
                        {isResettingPassword ? "Enter the Email Linked to Your Account to Reset Your Password" : `Sign ${isNewUser ? "up" : "in"} for Access to Exclusive Content!`}
                    </Typography>
                    <p className={classes.Error}>{error}</p> {/*if there is an error, show error */}
                    {emailSent && <p className={classes.EmailSent}>Password Reset Email Sent!</p>} {/*only displayed if password reset has been requested */}
                    <form autoComplete="off" className={classes.Form} onSubmit={handleSubmit}>
                        {isNewUser &&
                            <>
                                <TextField
                                    fullWidth 
                                    label="First Name"
                                    margin="normal"
                                    name="firstName"
                                    onChange={(event) => setUserData({...userData, firstName: event.target.value})} 
                                    required
                                    value={userData.firstName}
                                    variant="outlined"
                                />
                                <TextField
                                    fullWidth 
                                    label="Last Name"
                                    margin="normal" 
                                    name="lastName"
                                    onChange={(event) => setUserData({...userData, lastName: event.target.value})} 
                                    required
                                    value={userData.lastName}
                                    variant="outlined"
                                />
                                <TextField
                                    fullWidth 
                                    label="Phone Number (Optional)"
                                    margin="normal" 
                                    name="phone"
                                    onChange={(event) => setUserData({...userData, phone: event.target.value})} 
                                    value={userData.phone}
                                    variant="outlined"
                                />
                            </>
                        }
                        <TextField
                            fullWidth 
                            label="Email"
                            margin="normal" 
                            name="email"
                            onChange={(event) => setUserData({...userData, email: event.target.value})} 
                            required
                            type="email"
                            value={userData.email}
                            variant="outlined"
                        />
                        {!isResettingPassword && 
                            <TextField
                                fullWidth 
                                label="Password"
                                margin="normal" 
                                name="password" 
                                onChange={(event) => setUserData({...userData, password: event.target.value})} 
                                required
                                type="password"
                                value={userData.password}
                                variant="outlined"
                            />
                        }
                        <p className={classes.ForgotPassword} onClick={() => setIsResettingPassword(prevValue => !prevValue)}>
                            {isResettingPassword ? "Back to login" : (!isNewUser && "Forgot password?")}
                        </p>
                        <Button>{isNewUser ? "Next" : isPaying ? "Submit" : isResettingPassword ? "Send" : "Sign In"}</Button>
                        {!isResettingPassword && //if user is resetting password, this text should not be displayed
                            <p className={classes.Switch}>
                                <NavLink to={!isNewUser ? "/membership" : "/login"}>{!isNewUser ? "Don't have an account? " : "Already signed up? "}</NavLink>
                            </p>}
                    </form>
                </>
            }
        </div>
    );
}

export default RegisterForm;
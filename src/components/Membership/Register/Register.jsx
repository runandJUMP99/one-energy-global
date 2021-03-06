import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux"
import {Redirect} from "react-router-dom";

import {TextField, Typography} from "@material-ui/core";

import Button from "../../UI/Button/Button";
import RedirectNotification from "./RedirectNotification/RedirectNotification";
import Spinner from "../../UI/Spinner/Spinner";

import classes from "./Register.module.css";
import {register, resetPassword} from "../../../store/actions/auth";
//signInWithGoogle can be imported from ... ../auth

const Register = ({isRedirecting, setIsRedirecting}) => {
    const [emailSent, setEmailSent] = useState(false);
    const [isNewUser, setIsNewUser] = useState(false);
    const [isResettingPassword, setIsResettingPassword] = useState(false);
    const [isSignedUp, setIsSignedUp] = useState(false);
    const [userData, setUserData] = useState({
        email: "",
        firstName: "",
        lastName: "",
        password: "",
        phone: ""
    });
    const error = useSelector(state => state.auth.error);
    const loading = useSelector(state => state.auth.loading)
    const dispatch = useDispatch();

    function handleSubmit(event) {
        event.preventDefault();

        if (isResettingPassword) {
            dispatch(resetPassword(userData.email));
            setEmailSent(true);
        } else {
            setEmailSent(false);
            dispatch(register(isNewUser, userData));
        }

        setIsRedirecting(true);
        setUserData({
            email: "",
            firstName: "",
            lastName: "",
            password: "",
            phone: ""
        });
    }

    function handleSwitch() {
        setIsNewUser(prevValue => !prevValue);
        
        if (emailSent) {
            setEmailSent(false);
        }
    }

    return (
        <div className={classes.Register}>
            {isSignedUp && <Redirect to="/" />} {/* redirects back to home page after user has logged in */}
            {loading ? <Spinner /> : isRedirecting ? <RedirectNotification 
                isResettingPassword={isResettingPassword}
                setIsRedirecting={setIsRedirecting}
                setIsSignedUp={setIsSignedUp}
                setIsResettingPassword={setIsResettingPassword}
            /> :
                <>
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
                        <Button>{isNewUser ? "Sign Up" : isResettingPassword ? "Send" : "Sign In"}</Button>
                        {!isResettingPassword && //if user is resetting password, this text should not be displayed
                            <p className={classes.Switch}>
                                {!isNewUser ? "Don't have an account? " : "Already signed up? "} 
                                <span className={classes.SwitchClick} onClick={handleSwitch}>
                                    {!isNewUser ? "Register here." : "Login here."}
                                </span>
                            </p>}
                    </form>
                </>
            }
        </div>
    );
}

export default Register;

//GOOGLE SIGN IN

// {/* <button className={classes.Google} onClick={() => dispatch(signInWithGoogle())}><i className="fab fa-google"></i> Sign In With Google</button>
// <p className={classes.Divider}>-OR-</p> */}
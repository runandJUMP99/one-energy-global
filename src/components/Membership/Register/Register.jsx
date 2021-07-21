import React, {useEffect, useState} from "react";

import RegisterForm from "./RegisterForm/RegisterForm";

import classes from "./Register.module.css";

const Register = ({handleNextStep, newUser, tier}) => {
    return (
       <RegisterForm handleNextStep={handleNextStep} newUser={newUser} tier={tier} />
    );
}

export default Register;

//GOOGLE SIGN IN

// {/* <button className={classes.Google} onClick={() => dispatch(signInWithGoogle())}><i className="fab fa-google"></i> Sign In With Google</button>
// <p className={classes.Divider}>-OR-</p> */}
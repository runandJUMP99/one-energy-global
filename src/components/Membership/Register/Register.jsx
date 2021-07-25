import React from "react";

import RegisterForm from "./RegisterForm/RegisterForm";
import RegisterInfo from "./RegisterInfo/RegisterInfo";

import classes from "./Register.module.css";

const Register = ({handleNextStep, newUser, tier}) => {
    return (
        <div className={classes.Register}>
            <RegisterInfo tier={tier} />
            <RegisterForm handleNextStep={handleNextStep} newUser={newUser} tier={tier} />
        </div>
    );
}

export default Register;

//GOOGLE SIGN IN

// {/* <button className={classes.Google} onClick={() => dispatch(signInWithGoogle())}><i className="fab fa-google"></i> Sign In With Google</button>
// <p className={classes.Divider}>-OR-</p> */}
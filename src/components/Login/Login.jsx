import React, {useState} from "react";

import RegisterForm from "../Membership/Register/RegisterForm/RegisterForm";
import RegisterInfo from "../Membership/Register/RegisterInfo/RegisterInfo";

import classes from "./Login.module.css";

const Login = () => {
    const [isResettingPassword, setIsResettingPassword] = useState(false);

    return (
        <div className={classes.Login}>
            <div className={classes.Form}>
                <RegisterInfo />
                <RegisterForm isNewUser={false} isResettingPassword={isResettingPassword} setIsResettingPassword={setIsResettingPassword} />
            </div>
        </div>
    );
}

export default Login;
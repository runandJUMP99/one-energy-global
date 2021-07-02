import React from "react";
import {useDispatch} from "react-redux";

import Button from "../../UI/Button/Button";
import Donate from "./Donate/Donate";

import classes from "./CTASection.module.css";
import {setModalContent, setShowModal} from "../../../store/actions/modal";

const CTASection = () => {
    const dispatch = useDispatch();

    function handleClick() {
        dispatch(setModalContent(<Donate />));
        dispatch(setShowModal(true));
    }

    return (
        <div className={classes.CTASection}>
            <div className={classes.Backdrop}></div>
            <div className={classes.Text}>
                <h1>None of this would be possible without the donations and contributions of our members and volunteers.</h1>
                <p>Find out how you can make an impact.</p>
                <Button path="/volunteer" style={{marginRight: "0.5rem", width: "10rem"}}>Get Involved</Button>
                <Button onClick={handleClick} style={{marginLeft: "0.5rem", width: "10rem"}}>Sow A Seed</Button>
            </div>
        </div>
    );
}

export default CTASection;
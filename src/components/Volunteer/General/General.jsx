import React from "react";
import {useDispatch} from "react-redux";

import ButtonSecondary from "../../UI/ButtonSecondary/ButtonSecondary";
import PositionForm from "../Position/PositionDetails/PositionForm/PositionForm";

import classes from "./General.module.css";
import {setModalContent, setShowModal} from "../../../store/actions/modal";

const General = () => {
    const dispatch = useDispatch();

    function handleClick() {
        dispatch(setModalContent(<PositionForm title="General Volunteer" />));
        dispatch(setShowModal(true));
    }

    return (
        <div className={classes.General}>
            <h2>General Volunteer</h2>
            <p>The <strong>General Volunteer</strong> position is created for people that aren't sure what department or team they fit in. We will assist you to find the best possible team for you.</p>
            <ButtonSecondary onClick={handleClick}>Learn More</ButtonSecondary>
        </div>
    );
}

export default General;
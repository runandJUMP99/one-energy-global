import React from "react";
import {useDispatch} from "react-redux";

import ButtonSecondary from "../../UI/ButtonSecondary/ButtonSecondary";
import PositionDetails from "./PositionDetails/PositionDetails";

import classes from "./Position.module.css";
import {setModalContent, setShowModal} from "../../../store/actions/modal";

const Position = ({bullets, descriptionLong, descriptionShort, title}) => {
    const dispatch = useDispatch();

    function handleClick() {
        dispatch(setModalContent(
            <PositionDetails 
                bullets={bullets}
                descriptionLong={descriptionLong}
                title={title}
            />
        ));
        dispatch(setShowModal(true));
    }

    return (
        <div className={classes.Position}>
            <h3>{title}</h3>
            <p>{descriptionShort}</p>
            <ButtonSecondary onClick={handleClick} >Learn More</ButtonSecondary>
        </div>
    );
}

export default Position;
import React from "react";
import {useDispatch, useSelector} from "react-redux";

import classes from "./Backdrop.module.css";
import {setShowModal} from "../../../store/actions/modal";

function Backdrop({setShow, show}) {
    const showModal = useSelector(state => state.modal.showModal);
    const dispatch = useDispatch();

    function handleClick() {
        dispatch(setShowModal(false));
        setShow(false);
    }

    return (
        <div className={classes.Backdrop} onClick={handleClick} style={{
            opacity: (show || showModal) ? 1 : 0,
            zIndex: (show || showModal) ? 20 : -1
            }}>
        </div>
    );
}

export default Backdrop;
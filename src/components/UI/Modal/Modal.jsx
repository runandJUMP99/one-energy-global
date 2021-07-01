import React from "react";
import {useSelector} from "react-redux";

import classes from "./Modal.module.css";

const Modal = () => {
    const modalContent = useSelector(state => state.modal.modalContent);
    const showModal = useSelector(state => state.modal.showModal);

    return (
        <div className={classes.Modal} style={{
            opacity: showModal ? 1 : 0,
            transform: showModal ? "translateY(0)" : "translateY(-10rem)",
            zIndex: showModal ? 100 : -1
        }}>{modalContent}</div>
    );
}

export default Modal;
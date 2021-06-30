import React from "react";

import classes from "./Modal.module.css";

const Modal = ({children}) => {
    return (
        <div className={classes.Modal} style={{
            // opacity: showModal ? 1 : 0,
            // transform: showModal ? "translateY(0)" : "translateY(-100vh)",
        }}>{children}</div>
    );
}

export default Modal;
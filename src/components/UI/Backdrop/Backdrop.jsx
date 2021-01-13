import React from "react";

import classes from "./Backdrop.module.css";

function Backdrop({handleShow, show}) {
    return <div className={classes.Backdrop} onClick={handleShow} style={{
                opacity: show ? 1 : 0,
                zIndex: show ? 50 : -1
                }}>
            </div>;
}

export default Backdrop;
import React from "react";

import Links from "../../Navbar/Links/Links";
import Logo from "../Logo/Logo";

import classes from "./SideDrawer.module.css";

const SideDrawer = ({handleShow, setShow, show}) => {
    function handleClick(link) {
        // if (link === "Home" || link === "Services" || link === "Contact Us") {
        //     document.body.scrollTop = 0; // For Safari
        //     document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
        // }

        handleShow();
    }


    return (
        <div className={classes.SideDrawer} style={{
            transform: show ? "translateX(0)" : "translateX(-110%)",
        }}>
            <Logo setShow={setShow} />
            <nav>
                <Links onClick={handleClick} setShow={setShow} />
            </nav>
        </div>
    )
}

export default SideDrawer;
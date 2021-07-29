import React, {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";

import Links from "./Links/Links";
import LoginLogout from "../UI/LoginLogout/LoginLogout";
import ToggleButton from "../UI/ToggleButton/ToggleButton";

import classes from "./Navbar.module.css";

const Navbar = ({fixed, handleShow}) => {
    const pathname = useLocation().pathname;

    const [styles, setStyles] = useState(null);

    useEffect(() => {
        if (fixed) {
            window.addEventListener("scroll", () => {
                const currentScrollPos = window.pageYOffset;
                let visible = currentScrollPos > 525;

                if (visible) {
                    setStyles({
                        transform: "translateY(0)"
                    });
                } else {
                    setStyles({
                        transform: "translateY(-8rem)"
                    });
                }
            });
        } else {
            setStyles({
                background: "transparent",
                boxShadow: "none",
                position: "absolute",
                transform: "translateY(0)"
            });
        }
    }, [fixed]);

    if (pathname === "/account") {
        return null;
    }

    return (
        <div className={classes.Navbar} style={styles}>
            <nav>
                <Links />
            </nav>
            <ToggleButton handleShow={handleShow} />
            <LoginLogout />
        </div>
    );
}

export default Navbar;
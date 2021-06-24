import React, {useEffect, useState} from "react";

import Links from "./Links/Links";
import ToggleButton from "../UI/ToggleButton/ToggleButton";

import classes from "./Navbar.module.css";

const Navbar = ({fixed, handleShow}) => {
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

    return (
        <div className={classes.Navbar} style={styles}>
            <nav>
                <Links />
            </nav>
            <ToggleButton handleShow={handleShow} />
        </div>
    );
}

export default Navbar;
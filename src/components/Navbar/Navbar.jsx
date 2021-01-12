import React, {useEffect, useState} from "react";

import Links from "./Links/Links";
import Logo from "../UI/Logo/Logo";

import classes from "./Navbar.module.css";

const Navbar = ({fixed}) => {
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
                        transform: "translateY(-5rem)"
                    });
                }
            });
        } else {
            setStyles({
                background: "transparent",
                boxShadow: "none",
                position: "initial",
                transform: "translateY(0)"
            });
        }
    }, [fixed]);

    return (
        <div className={classes.Navbar} style={styles}>
            <Logo />
            <Links />
        </div>
    );
}

export default Navbar;
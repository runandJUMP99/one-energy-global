import React, {useState} from "react";
import {useSelector} from "react-redux";

import classes from "./Highlight.module.css";

const Highlight = ({active, icon, locked, subtitle, title}) => {
    const [mouseOver, setMouseOver] = useState(false);
    const token = useSelector(state => state.auth.token);

    if (token) {
        locked = false;
    }

    return (
        <div className={classes.Highlight} onMouseEnter={() => setMouseOver(true)} onMouseLeave={() => setMouseOver(false)} style={{background: mouseOver && "rgba(0, 0, 0, 0.3)"}}>
            {!active && <h2 className={classes.ComingSoon} style={{opacity: mouseOver && 1, transform: mouseOver && "translateY(0)"}}>{locked ? "Sign Up To Unlock Access!" : "Coming Soon!"}</h2>}
            <div className={classes.Content} style={{filter: mouseOver && "blur(4px)"}}>
                <div className={classes.Text}>
                    <h3>{title}</h3>
                    <p>{subtitle}</p>
                </div>
                {icon}
            </div>
            {locked &&
                <img
                    alt="Locked"
                    className={classes.Locked} 
                    src="https://firebasestorage.googleapis.com/v0/b/one-energy-global.appspot.com/o/lock.svg?alt=media&token=662a81cf-b1e3-44c2-b9d4-c8da20a7a4b2"
                    style={{filter: mouseOver && "blur(4px)"}}
                />
            }
        </div>
    );
}

export default Highlight;
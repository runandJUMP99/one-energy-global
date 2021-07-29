import React from "react";

import MenuItem from "./MenuItem/MenuItem";

import classes from "./SideMenu.module.css";

const SideMenu = ({currentDisplay, setCurrentDisplay}) => {
    return (
        <ul className={classes.SideMenu}>
            <MenuItem name="Profile" selected={currentDisplay === 0} setCurrentDisplay={() => setCurrentDisplay(0)} />
        </ul>
    );
}

export default SideMenu;
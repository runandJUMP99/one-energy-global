import React from "react";
import {useDispatch, useSelector} from "react-redux";

import LeaderBio from "./LeaderBio/LeaderBio";

import classes from "./Leader.module.css";
import {setModalContent, setShowModal} from "../../../../store/actions/modal";

const Leader = ({bio1, bio2, img, name, title}) => {
    const dispatch = useDispatch();

    function handleClick() {
        dispatch(setModalContent(
            <LeaderBio 
                bio1={bio1}
                bio2={bio2}
                img={img}
                name={name}
                title={title}
            />
        ));
        dispatch(setShowModal(true));
    }

    if (!img) {
        img = "https://firebasestorage.googleapis.com/v0/b/one-energy-global.appspot.com/o/logo.jpg?alt=media&token=92ce1143-9800-40c5-b3f5-0c50140275d3";
    }

    return (
        <div className={classes.Leader}>
            <img onClick={handleClick} src={img} alt={name} />
            <h3 onClick={handleClick}>{name}</h3>
            <p><em>{title}</em></p>
        </div>
    );
}

export default Leader;
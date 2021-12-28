import React from "react";
import { useDispatch } from "react-redux";

import Button from "../../../UI/Button/Button";
import Divider from "../../../UI/Divider/Divider";
import Frame from "../../../UI/Frame/Frame";
import PositionForm from "./PositionForm/PositionForm";

import classes from "./PositionDetails.module.css";
import { setModalContent } from "../../../../store/actions/modal";

const PositionDetails = ({ bullets, descriptionLong, title }) => {
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(setModalContent(<PositionForm title={title} />));
  }

  return (
    <div className={classes.PositionDetails}>
      <Frame />
      <h1>{title}</h1>
      <Divider />
      <div className={classes.Text}>
        <p>{descriptionLong}</p>
        <ul>
          {bullets.map((bullet, index) => (
            <li key={index}>{bullet}</li>
          ))}
        </ul>
      </div>
      <Button onClick={handleClick}>Learn More</Button>
    </div>
  );
};

export default PositionDetails;

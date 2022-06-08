import React from "react";
import AppChildrensType from "../../types/AppPropTypes";
import classes from "./Card.module.css";
const Card: React.FC<AppChildrensType> = (props) => {
  return (
    <div className={`${classes.card} ${props.className}`}>{props.children}</div>
  );
};

export default Card;

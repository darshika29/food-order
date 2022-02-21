import React, { Fragment } from "react";
import classes from "../UI/Card.module.css";
const Card = (props) => {
  return <div className={classes.card}>{props.children}</div>;
};
export default Card;
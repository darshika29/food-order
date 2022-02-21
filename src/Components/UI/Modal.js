import React from "react";
import {Fragment} from "react";
import classes from "../UI/Modal.module.css";
import ReactDOM from 'react-dom';

const Backdrop = (props) => {
  return <div className={classes.backdrop}></div>;
};
const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};
const PortalEle = document.getElementById('overlays');

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop />, PortalEle)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,PortalEle)}
    </Fragment>
  );
};
export default Modal;

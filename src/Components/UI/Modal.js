import Fragment from "react";
import classes from "../UI/Modal.module.css";
import ReactDOM from "react";

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

const Modal = (props) => {
  const PortalId = document.getElementById('overlays');
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop />, PortalId)}
      {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,PortalId)}
    </Fragment>
  );
};
export default Modal;

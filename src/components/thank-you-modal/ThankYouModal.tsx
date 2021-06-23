import React from "react";
import { Modal } from "react-bootstrap";

interface ThankYouModalProps {
  show: boolean;
  handleClose: Function;
}


export const ThankYouModal = (props: ThankYouModalProps) => {
  const { show, handleClose } = props;
  return (
    <Modal show={show} onHide={handleClose} centered className="success-modal">
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <img
          src={require("../../assets/img/thanks-popup.svg").default}
          alt="thanks-popup-icon"
        />
        <h4>Thank you for your interest in our Publisher SDK.</h4>
        <p>“We will be in touch soon”</p>


      </Modal.Body>
    </Modal>
  );
};

export default ThankYouModal;

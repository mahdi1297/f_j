import React from "react";
import { Modal } from "reactstrap";

const ModalContainer = ({ modal, modalToggle, children, size }) => {
  return (
    <Modal size={size} isOpen={modal} toggle={modalToggle} centered>
      {children}
    </Modal>
  );
};

export default ModalContainer;

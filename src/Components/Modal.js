import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FaArchive, FaPowerOff, FaWindowClose } from "react-icons/fa";
const DeleteModal = ({ onClose, onConfirm }) => {

  const handleConfirm = () => {
    onConfirm();
    onClose();
  };

  return (
    <Modal
      show={true}
      onHide={onClose}
      backdrop="static"
      keyboard={false}

    >
      <Modal.Header closeButton style={{ backgroundColor: 'purple' }}>
        <Modal.Title style={{ color: 'white', fontStyle: 'italic', fontWeight: 'bolder' }}>Delete <FaWindowClose /></Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ backgroundColor: 'plum', fontStyle: 'italic', fontWeight: 'bold', color: 'red' }}>
        Are you Sure you want to delete this User?
      </Modal.Body>
      <Modal.Footer style={{ backgroundColor: 'plum' }}>
        <Button variant="secondary" onClick={handleConfirm} className="btn btn-danger"  >
          <FaArchive />Delete
        </Button>
        <Button variant="" onClick={onClose} style={{ backgroundColor: 'white' }}><FaPowerOff />Cancel</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DeleteModal;

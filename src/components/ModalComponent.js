import React, { useState } from "react";
import Modal from "react-modal";
import ProductForm from "../pages/AddProduct";
import CloseIcon from "@mui/icons-material/Close";

const ModalComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Inline style object for modal
  const modalStyle = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: '500px',
      height: 'fit-content'
    },
  };

  // react-modal open & close functionality
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <button onClick={openModal} className="primary-btn">
        Add Product
      </button>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        style={modalStyle}
        overlayClassName="modal-overlay"
      >
        <button onClick={closeModal} className="close-modal">
          <CloseIcon />
        </button>
        <ProductForm />
      </Modal>
    </div>
  );
};

export default ModalComponent;

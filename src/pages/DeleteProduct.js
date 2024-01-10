import React, { useState } from "react";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import CloseIcon from "@mui/icons-material/Close";
import EditedForm from "./EditedForm";

const DeleteProduct = ({ item, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Inline style object for modal
  const modalStyle = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      width: "500px",
      height: "fit-content",
    },
  };

  // react-modal open & close functionality
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleToggleEdit = () => {
    setIsEditing(!isEditing);
    setIsModalOpen(true);
  };

  return (
    <>
      {isEditing ? (
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
          <EditedForm
            item={item}
            onEdit={onEdit}
            onCancelEdit={handleToggleEdit}
          />
        </Modal>
      ) : (
        <>
          <Card className="my-3 p-3 rounded">
            <div className="edit-delete-btn">
              <button onClick={handleToggleEdit} className="delete-btn">
                <BorderColorIcon />
              </button>
              <button onClick={() => onDelete(item._id)} className="delete-btn">
                <DeleteOutlineIcon />
              </button>
            </div>
            <Card.Body>
              <Link to={`/product/${item._id}`}>
                <Card.Title as="div">
                  <strong>{item.name}</strong>
                </Card.Title>
              </Link>
              <Link to={`/product/${item._id}`}>
                <Card.Text as="div" style={{ fontWeight: "700" }}>
                  ₹ {item.price}
                </Card.Text>
              </Link>
              <Link to={`/product/${item._id}`}>
                <Card.Text as="div">{item.description}</Card.Text>
              </Link>
            </Card.Body>
          </Card>
        </>
      )}
    </>
  );
};

export default DeleteProduct;

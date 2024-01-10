import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const EditedForm = ({ item, onEdit, onCancelEdit }) => {
  
  const [formData, setFormData] = useState({
    name: item.name,
    price: item.price,
    description: item.description,
  });

  //User can edit the product details
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevTodo) => ({
      ...prevTodo,
      [name]: value,
    }));
  };

  const handleSave = () => {
    onEdit(item._id, formData);
    onCancelEdit();
  };

  return (
    <Form>
      <Form.Group controlId="formProductName" className="form-input">
        <Form.Label>Name:</Form.Label>
        <Form.Control
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          autoComplete="off"
        />
      </Form.Group>
      <Form.Group controlId="formProductName" className="form-input">
        <Form.Label>Price:</Form.Label>
        <Form.Control
          type="number"
          name="price"
          value={formData.price}
          onChange={handleInputChange}
          autoComplete="off"
        />
      </Form.Group>
      <Form.Group controlId="formProductName" className="form-input">
        <Form.Label> Description:</Form.Label>
        <Form.Control
          as="textarea"
          name="description"
          value={formData.description}
          onChange={handleInputChange}
          autoComplete="off"
        />
      </Form.Group>
      <Button
        variant="primary"
        type="submit"
        className="form-input"
        onClick={handleSave}
      >
        Save
      </Button>
      <Button
        variant="primary"
        type="submit"
        className="form-input"
        onClick={onCancelEdit}
        style={{marginLeft: "20px"}}
      >
        Cancel
      </Button>
    </Form>
  );
};

export default EditedForm;

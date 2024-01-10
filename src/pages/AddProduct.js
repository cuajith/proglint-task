import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";

const ProductForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Authenticated User can add their products 
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "https://crudcrud.com/api/9f0d5627bf074fd181dd7633d649de7b/products",
        formData
      )
      .then((response) => console.log(response.data));
    setFormData({
      name: "",
      price: "",
      description: "",
    });
  };

  return (
    <Form onSubmit={handleSubmit} className="addproduct-form">
      <Form.Group controlId="formProductName" className="form-input">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter product name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          autoComplete="off"
        />
      </Form.Group>

      <Form.Group controlId="formProductPrice" className="form-input">
        <Form.Label>Price</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter product price"
          name="price"
          value={formData.price}
          onChange={handleChange}
          autoComplete="off"
        />
      </Form.Group>

      <Form.Group controlId="formProductDescription" className="form-input">
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          placeholder="Enter product description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          autoComplete="off"
        />
      </Form.Group>

      <Button
        variant="primary"
        type="submit"
        className="form-input"
        style={{ background: "#058359" }}
      >
        Submit
      </Button>
    </Form>
  );
};

export default ProductForm;

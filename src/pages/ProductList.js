import React from "react";
import ModalComponent from "../components/ModalComponent";
import DeleteProduct from "./DeleteProduct";
import axios from "axios";

const ProductsList = ({ data, setData }) => {
  const handleDelete = async (id) => {
    try {
      // Make a DELETE request to the CRUDCRUD API endpoint with the product ID using Axios
      const response = await axios.delete(
        `https://crudcrud.com/api/9f0d5627bf074fd181dd7633d649de7b/products/${id}`
      );

      if (response.status === 200) {
        // If the deletion is successful, update the state to reflect the changes
        setData((prev) => prev.filter((product) => product._id !== id));
      } else {
        console.error("Failed to delete product:", response.statusText);
      }
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  const handleEdit = async (id, updatedProduct) => {
    try {
      // Make a PUT request to the CRUDCRUD API endpoint with the updated product using Axios
      const response = await axios.put(
        `https://crudcrud.com/api/9f0d5627bf074fd181dd7633d649de7b/products/${id}`,
        updatedProduct
      );

      if (response.status === 200) {
        // If the update is successful, update the state to reflect the changes
        setData((prev) =>
          prev.map((product) =>
            product._id === id ? { ...product, ...updatedProduct } : product
          )
        );
      } else {
        console.error("Failed to edit:", response.statusText);
      }
    } catch (error) {
      console.error("Error editing product:", error);
    }
  };

  return (
    <div className="productList">
      <div className="productList-head">
        <h2>List of product</h2>
        <ModalComponent />
      </div>
      <div className="mainbar">
        <div className="product">
          {data.map((item) => (
            <DeleteProduct
              key={item._id}
              item={item}
              onDelete={handleDelete}
              onEdit={handleEdit}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsList;

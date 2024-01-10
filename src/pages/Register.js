import React, { useState } from "react";
import { Form, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  //password show & hide functionality
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  // User registration API
  const onFinish = async (values) => {
    try {
      // Check if email is already registered
      const response = await axios.get(
        `https://crudcrud.com/api/9f0d5627bf074fd181dd7633d649de7b/register?filter={"email": "${values.email}"}`
      );
      if (response.data.length > 0) {
        alert("Email already registered");
        return;
      }
      await axios
        .post(
          "https://crudcrud.com/api/9f0d5627bf074fd181dd7633d649de7b/register",
          values
        )
        .then((response) => {
          message.success("User registered");
          navigate("/login");
        });
    } catch (error) {
      message.error("Error");
    }
  };
  return (
    <div className="main d-flex justify-content-center align-items-center">
      <div className="w-300 card">
        <Form layout="vertical" onFinish={onFinish}>
          <h2 className="text-2xl">Register</h2>
          <Form.Item label="Name" name="Name">
            <input type="text" autoComplete="off" />
          </Form.Item>
          <Form.Item label="Email" name="email">
            <input type="email" autoComplete="off" />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            className="password-input-container"
          >
            <div className="password-input-wrapper">
              <input
                type={showPassword ? "text" : "password"}
                autoComplete="off"
              />
              <button type="button" onClick={handleTogglePassword}>
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </Form.Item>
          <button className="primary-btn" type="submit">
            Register
          </button>
        </Form>

        <p className="redirect">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;

import React, { useState } from "react";
import { Form, message } from "antd";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  //password show & hide functionality
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  //Login validation
  const onFinish = async (values) => {
    try {
      // Check if email and password match
      const response = await axios.get(
        `https://crudcrud.com/api/9f0d5627bf074fd181dd7633d649de7b/register?filter={"email": "${values.email}"}`
      );

      const email = response.data.find((email) => email.email === values.email);
      if (!email) {
        message.error("Incorrect Email");
        return;
      }

      const user = response.data.find(
        (user) => user.password === values.password
      );
      if (!user) {
        message.error("Incorrect password");
        return;
      }
      message.success("Login successful");
      localStorage.setItem("userEmail", values.email);
      navigate("/home");
    } catch (error) {
      message.error("Error");
    }
  };

  return (
    <div className="main d-flex justify-content-center align-items-center">
      <div className="w-300 card">
        <Form layout="vertical" onFinish={onFinish}>
          <h2 className="text-2xl">Login</h2>
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
            Login
          </button>
        </Form>

        <p className="redirect">
          New User? <Link to="/">Register here</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;

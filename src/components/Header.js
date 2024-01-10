import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";

const Header = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const navigate = useNavigate();
  const email = localStorage.getItem("userEmail");

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  // Logout Handler
  const handleClick = () => {
    navigate("/login");
    localStorage.removeItem('userEmail');
  };

  return (
    <nav className="navbar">
      <div className="logo">Landing Page</div>
      <div
        className={`dropdown ${isDropdownVisible ? "clicked" : ""}`}
        onClick={toggleDropdown}
      >
        <div>
          <PeopleAltIcon />
          <button className="dropbtn">{email}</button>
        </div>

        <div className="dropdown-content">
          <a href="/" onClick={handleClick}>
            Logout
          </a>
        </div>
      </div>
    </nav>
  );
};
export default Header;

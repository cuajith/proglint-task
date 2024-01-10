import React, { useEffect, useState } from "react";
import ProductsList from "./ProductList";
import CategoryList from "./CategoryList";
import Header from "../components/Header";
import axios from "axios";
import Login from "./Login";

const Home = () => {
  const [data, setData] = useState([]);
  const [showHomePage, setShowHomePage] = useState(false);
  const email = localStorage.getItem("userEmail");

  //Fetching the products to display to the Home Page
  useEffect(() => {
    axios
      .get("https://crudcrud.com/api/9f0d5627bf074fd181dd7633d649de7b/products")
      .then((response) => setData(response.data));

    //only loggedIn user can see the home page
    if (email) {
      setShowHomePage(!showHomePage);
    }
  }, []);

  return (
    <div className="container-fluid">
      {showHomePage ? (
        <>
          <div className="row">
            <Header />
          </div>
          <div className="row home-page">
            <div className="col-md-3">
              <CategoryList />
            </div>
            <div className="col-md-9">
              <ProductsList data={data} setData={setData} />
            </div>
          </div>
        </>
      ) : (
        <Login />
      )}
    </div>
  );
};

export default Home;

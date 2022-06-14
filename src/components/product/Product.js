import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../context/DataContext";
import "./product.css";

const Product = (productData) => {
  const dataContext = useContext(DataContext);

  const configDetails = () => {
    dataContext.setProduct(productData);
  };

  return (
    <div className="container container-fluid">
      <Link
        to={`/producto/${productData.productData.path}`}
        onClick={configDetails}
      >
        <img
          src={productData.productData.photo}
          alt={productData.productData.name}
          className="product img-fluid"
        ></img>
      </Link>
      <h4>{productData.productData.name}</h4>
      <h5>${productData.productData.price}</h5>
    </div>
  );
};

export default Product;

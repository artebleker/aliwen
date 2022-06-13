import React from "react";
import { testProducts, types } from "../test/test";
import { useParams } from "react-router-dom";
import Product from "../components/product/Product";
import "./catalogue.css";
const Catalogue = () => {
  const { category } = useParams();

  const categoryProducts =
    category === undefined
      ? testProducts
      : testProducts.filter(
          (fil) =>
            fil.type === types.find((fin) => fin.category === category).id
        );

  return (
    <div className="catalogue-container">
      <h1>
        {category === undefined
          ? "Catalogo"
          : types.find((fin) => fin.category === category).type}
      </h1>
      <div className="catalogue-products">
        {categoryProducts.map((cat, index) => {
          return <Product key={index} productData={cat} />;
        })}
      </div>
    </div>
  );
};

export default Catalogue;

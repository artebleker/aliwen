import React, { useContext } from "react";
import { DataContext } from "../components/context/DataContext";
import Counter from "../components/counter/Counter";
import Display from "../components/display/Display";
import "./detail.css";

const Detail = () => {
  const dataContext = useContext(DataContext);
  const product = dataContext.product.productData;

  return (
    <div className="detail container container-fluid">
      <h1>{product.name}</h1>
      <div className="product-card container container-fluid">
        <div className="name-pic-price">
          {product.subName && <h2>{product.subName}</h2>}
          <img
            src={product.photo}
            alt={product.name}
            className="product img-fluid"
          />
          <p>${product.price}</p>
        </div>
        <div className="description-counter">
          <p className="p-grid">{product.description}</p>
          <ul className="ul-grid">
            {product.highlights.map((m, index) => {
              return <li key={index}>{m}</li>;
            })}
          </ul>
          <div
            className=" btn-grid"
          >
            <Counter />
            <Display />
            <button className="btn btn-form">Agregar al carrito</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;

import React from "react";
import Product from "../components/product/Product";
import { testHotSales, testProducts } from "../test/test";
import './home.css'
import { testText } from "../test/test";
const Home = () => {
  return (
    <div>
      <div className="home-banner"></div>
      <div className="home-text">
        <p className="home-text_text">{testText.find((f)=>f.name ==='home').text}</p>
      </div>
      {testHotSales.length > 0 && (
        <div className="home-hotsales">
          <h3 className="text-center">Lo más vendido</h3>
          <div className="products-hotsales">
            {testHotSales.map((hotSale) => {
              return (
                <Product
                  productData={testProducts.find((f) => f.id === hotSale)}
                />
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;

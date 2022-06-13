import React from "react";
import { testProducts, types } from "../test/test";
import { useParams } from "react-router-dom";
import Product from "../components/product/Product";
const Catalogue = () => {
  const { category } = useParams();

  const categoryProducts =
    category === undefined
      ? testProducts
      : testProducts.filter(
          (fil) => fil.type === types.find((fin) => fin.category === category).id)
       
  console.log(categoryProducts);
  return( 
  <div>
    <h1>{category === undefined? 'Catalogo' : types.find((fin) => fin.category === category).type}</h1>
    {categoryProducts.map((cat, index)=>{
      return(
      <Product key={index} productData={cat}/>
      )
    })}
  </div>
  );
};

export default Catalogue;

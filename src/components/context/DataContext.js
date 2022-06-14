import React, { createContext, useEffect, useState } from "react";

export const DataContext = createContext();
const DataContextProvider = ({ children }) => {
  //product
  const [product, setProduct] = useState([]);

  return (
    <DataContext.Provider
      value={{
        product,
        setProduct,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;

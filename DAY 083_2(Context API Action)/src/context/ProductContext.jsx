import React, { createContext, useEffect, useState } from "react";
import { getData } from "../api/ProductData";

export const ProductDataContext = createContext()

const ProductContext = ({ children }) => {
  const [ProductData, setProductData] = useState([]);

  const setData = async ()=>{
    const data = await getData()
    setProductData(data)
  }

  useEffect(() => {
    setData();
  }, []);

  return <div>
            <ProductDataContext.Provider value={ProductData}>
                {children}
            </ProductDataContext.Provider>
        </div>;
};

export default ProductContext;

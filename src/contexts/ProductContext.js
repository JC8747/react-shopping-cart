import React, { createContext, useState } from "react";
import data from "../demoData";

export const ProductContext = createContext();

export const ProductProvider = props => {
  const [shop, setShop] = useState({
    cart: [],
    price: 0,
    items: [...data]
  });
  return (
    <ProductContext.Provider value={[shop, setShop]}>
      {props.children}
    </ProductContext.Provider>
  );
};
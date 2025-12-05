import React from "react";
import { CartProvider } from "./context/CartContext";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/index";
import { ProductsProvider } from "./context/ProductContext";
import { FilterProvider } from "./context/FilterContext";

const App = () => {
  return (
    <ProductsProvider>
      <FilterProvider>
        <CartProvider>
          <RouterProvider router={router} />
        </CartProvider>
      </FilterProvider>
    </ProductsProvider>
  );
};

export default App;

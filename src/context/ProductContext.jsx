import { createContext, useContext, useEffect, useState } from "react";
import productsData from "../data/products.json";

const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchProducts = async () => {
    try {
      const res = await fetch("https://dummyjson.com/products");
      const data = await res.json();
      // console.log(data.products);

      // const data = productsData;
      setProducts(data.products);

      // Extract unique categories
      const uniqueCategories = [
        "All",
        ...new Set(data.products.map((p) => p.category)),
      ];
      setCategories(uniqueCategories);
      setLoading(false);
    } catch (err) {
      setError("Failed to load products");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <ProductsContext.Provider value={{ products, categories, loading, error }}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = () => useContext(ProductsContext);

import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Home from "../pages/Home";
import ProductsPage from "../pages/ProductsPage";
import ProductDetailPage from "../pages/ProductDetailPage";
import CartPage from "../pages/CartPage";
import NotFoundPage from "../pages/NotFoundPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/products", element: <ProductsPage /> },
      { path: "/products/:id", element: <ProductDetailPage /> },
      { path: "/cart", element: <CartPage /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);

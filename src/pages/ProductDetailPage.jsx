import React, { useEffect, useState } from "react";
import { useProducts } from "../context/ProductContext";
import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";
import Loader from "../components/common/Loader";

const ProductDetailPage = () => {
  const { products, loading } = useProducts();
  const { id } = useParams();
  const { addToCart } = useCart();

  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const found = products.find((item) => item.id === Number(id));
    setProduct(found);
  }, [products, id]);
  if (loading || !product) return <Loader />;
  return (
    <div className="container mx-auto p-6 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-10 mt-15">
      {/* Product Image */}
      <div className="flex justify-center">
        <img
          src={product.images[0]}
          alt={product.title}
          className="rounded-lg w-full max-w-md shadow-lg object-cover"
        />
      </div>

      {/* Product Info */}
      <div>
        <h1 className="text-3xl font-bold mb-3">{product.title}</h1>

        {/* Category */}
        <span className="badge badge-primary mb-4">{product.category}</span>

        {/* Ratings */}
        <div className="flex items-center gap-2 my-2">
          <div className="rating">
            {Array.from({ length: 5 }, (_, i) => (
              <input
                key={i}
                type="radio"
                className="mask mask-star-2 bg-yellow-400"
                readOnly
                checked={i < Math.round(product.rating)}
              />
            ))}
          </div>
          <span className="text-gray-600">({product.rating} / 5)</span>
        </div>

        {/* Price */}
        <p className="text-2xl font-bold text-green-600 mb-4">
          ₹{product.price}
        </p>

        {/* Description */}
        <p className="text-gray-600 leading-relaxed mb-6">
          {product.description}
        </p>

        {/* Quantity Control */}
        <div className="flex items-center gap-4 mb-5">
          <button
            className="btn btn-outline"
            onClick={() => quantity > 1 && setQuantity(quantity - 1)}
          >
            -
          </button>
          <span className="text-lg">{quantity}</span>
          <button
            className="btn btn-outline"
            onClick={() => setQuantity(quantity + 1)}
          >
            +
          </button>
        </div>

        {/* Add To Cart */}
        <button
          onClick={() => addToCart(product, quantity)}
          className="btn btn-primary btn-lg w-full mt-3"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetailPage;

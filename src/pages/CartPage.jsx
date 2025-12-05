import React from "react";
import { useCart } from "../context/CartContext";

const CartPage = () => {
  const { cart, removeFromCart, updateQuantity, cartTotal, clearCart } =
    useCart();

  if (cart.length === 0)
    return <h2 className="text-center mt-10">🛒 Your Cart is Empty</h2>;

  return (
    <div className="container max-w-[90vw] mx-auto mt-15">
      <h2 className="text-2xl font-bold pt-5 mb-5">Your Cart</h2>

      <div className="space-y-4">
        <button onClick={() => clearCart()}>Clear</button>
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center border p-3 rounded"
          >
            <div className="flex items-center gap-4">
              <img
                src={item.images[0]}
                className="w-20 h-20 rounded object-cover"
              />
              <div>
                <h3 className="font-semibold">{item.title}</h3>
                <p>₹{item.price}</p>
              </div>
            </div>

            {/* Quantity */}
            <div className="flex items-center gap-2">
              <button
                className="btn btn-xs"
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                disabled={item.quantity <= 1}
              >
                -
              </button>

              <span className="px-3">{item.quantity}</span>

              <button
                className="btn btn-xs"
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
              >
                +
              </button>
            </div>

            {/* Remove */}
            <button
              className="btn btn-error btn-xs"
              onClick={() => removeFromCart(item.id)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      {/* Summary */}
      <div className="mt-6 p-4 border shadow rounded">
        <h3 className="text-lg font-bold">Total: ₹{cartTotal}</h3>
        <button className="btn btn-success w-full mt-2">Checkout</button>
      </div>
    </div>
  );
};

export default CartPage;

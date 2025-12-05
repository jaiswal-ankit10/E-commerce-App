import React from "react";
import { Link } from "react-router-dom";
import { useProducts } from "../context/ProductContext";

const Home = () => {
  const { products, categories } = useProducts();
  const featured = products.slice(0, 6);

  return (
    <div className="">
      <section className="bg-base-200 py-20">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              Shop Smart, Live Better 🛍️
            </h1>
            <p className="text-gray-500 text-lg mb-6">
              Discover premium products at an affordable price. Fast delivery &
              trusted quality.
            </p>
            <Link to="/products" className="btn btn-primary px-6">
              Browse Products
            </Link>
          </div>
          <div className="flex-1">
            <img
              src="https://images.unsplash.com/photo-1561715276-a2d087060f1d?auto=format&w=600"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-bold mb-6">Shop By Category</h2>

        <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((cat) => (
            <Link
              key={cat}
              to={`/products?category=${cat}`}
              className="bg-base-200 p-6 rounded-lg shadow hover:bg-primary hover:text-primary-content transition"
            >
              {cat}
            </Link>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-6">Featured Products</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {featured.map((p) => (
            <Link
              key={p.id}
              to={`/products/${p.id}`}
              className="border rounded-lg p-3 hover:shadow-md transition"
            >
              <img
                src={p.images[0]}
                className="w-full h-48 object-cover rounded mb-3"
              />
              <h3 className="font-semibold">{p.title}</h3>
              <p className="text-green-600 font-bold">₹{p.price}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-base-200 py-20">
        <div className="container mx-auto px-6 grid md:grid-cols-3 gap-6 text-center">
          <div className="p-4">
            <h3 className="text-xl font-semibold">🚀 Fast Delivery</h3>
            <p className="text-gray-500">
              Get your orders quickly with our optimized shipping.
            </p>
          </div>

          <div className="p-4">
            <h3 className="text-xl font-semibold">🛡 Secure Payments</h3>
            <p className="text-gray-500">
              Your transactions are encrypted and safe.
            </p>
          </div>

          <div className="p-4">
            <h3 className="text-xl font-semibold">🌟 Quality Products</h3>
            <p className="text-gray-500">
              We always focus on premium products at fair prices.
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Join Our Newsletter</h2>
        <p className="text-gray-500 mb-6">
          Get updates on new arrivals and exclusive offers.
        </p>

        <div className="flex justify-center gap-2 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="input input-bordered w-full"
          />
          <button className="btn btn-primary">Subscribe</button>
        </div>
      </section>
    </div>
  );
};

export default Home;

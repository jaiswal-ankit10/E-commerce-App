import React from "react";
import { useProducts } from "../context/ProductContext";
import Loader from "../components/common/Loader";
import CategoryFilter from "./CategoryFilter";
import Card from "../components/common/Card";
import { useFilter } from "../context/FilterContext";
import { filterProducts } from "../utils/filterProducts";
import { sortProducts } from "../utils/sortProducts";

const ProductsPage = () => {
  const { products, categories, loading, error } = useProducts();
  const {
    searchText,
    selectedCategory,
    sortBy,
    priceRange,
    updateCategory,
    updateSearch,
    updateSort,
    updatePriceRange,
    clearFilters,
  } = useFilter();

  const filtered = filterProducts(
    products,
    searchText,
    selectedCategory,
    priceRange
  );
  const sorted = sortProducts(filtered, sortBy);
  if (loading)
    return (
      <div className="flex justify-center items-center h-screen my-auto">
        <Loader />
      </div>
    );
  if (error) return <p>{error}</p>;
  return (
    <div className="mt-15 max-w-[80vw] mx-auto">
      <h1 className="text-center py-10 ">Available Products</h1>

      <div className="">
        <div className="mb-5 flex gap-10 items-center my-4">
          <input
            type="text"
            placeholder="Search..."
            value={searchText}
            onChange={(e) => updateSearch(e.target.value)}
            className="input input-bordered"
          />
          <select
            className="select select-bordered"
            onChange={(e) => updateSort(e.target.value)}
            value={sortBy}
          >
            <option value="">Sort</option>
            <option value="low">Price: Low to High</option>
            <option value="high">Price: High to Low</option>
            <option value="az">A → Z</option>
            <option value="za">Z → A</option>
          </select>

          <input
            type="range"
            min="100"
            max="50000"
            value={priceRange}
            onChange={(e) => updatePriceRange(e.target.value)}
            className="range"
          />
          <span>{priceRange}₹</span>

          <button onClick={clearFilters} className="btn btn-warning">
            Clear
          </button>
        </div>

        <CategoryFilter
          categories={categories}
          updateCategory={updateCategory}
        />
      </div>

      <div>
        <div className="grid grid-cols-3 gap-5">
          <Card sorted={sorted} />
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;

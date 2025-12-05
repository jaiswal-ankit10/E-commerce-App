import { createContext, useContext, useState } from "react";

const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const [searchText, setSearchText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("");
  const [priceRange, setPriceRange] = useState(500);

  const updateSearch = (text) => setSearchText(text);
  const updateCategory = (category) => setSelectedCategory(category);
  const updateSort = (sort) => setSortBy(sort);
  const updatePriceRange = (price) => setPriceRange(price);

  const clearFilters = () => {
    setSearchText("");
    setSelectedCategory("All");
    setSortBy("");
    setPriceRange(500);
  };

  return (
    <FilterContext.Provider
      value={{
        searchText,
        selectedCategory,
        sortBy,
        priceRange,
        updateCategory,
        updateSearch,
        updateSort,
        updatePriceRange,
        clearFilters,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};
export const useFilter = () => useContext(FilterContext);

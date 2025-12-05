export const filterProducts = (
  products,
  searchText,
  selectedCategory,
  priceRange
) => {
  let filtered = [...products];

  if (searchText.trim() !== "") {
    filtered = filtered.filter((p) =>
      p.title.toLowerCase().includes(searchText.toLowerCase())
    );
  }

  if (selectedCategory !== "All") {
    filtered = filtered.filter((p) => p.category === selectedCategory);
  }

  filtered = filtered.filter((p) => p.price <= priceRange);
  return filtered;
};

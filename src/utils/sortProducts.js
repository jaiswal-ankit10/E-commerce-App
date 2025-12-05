export const sortProducts = (products, sortBy) => {
  let sorted = [...products];

  if (sortBy === "low") sorted.sort((a, b) => a.price - b.price);
  if (sortBy === "high") sorted.sort((a, b) => b.price - a.price);
  if (sortBy === "az") sorted.sort((a, b) => a.title.localeCompare(b.title));
  if (sortBy === "za") sorted.sort((a, b) => b.title.localeCompare(a.title));

  return sorted;
};

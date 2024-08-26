import React, { useState } from "react";
import { AllCardData } from "../../AllData/Data.jsx";
import ProductCard from "../CardComponent/ProductCard.jsx";

const Product = () => {
  const [visibleItems, setVisibleItems] = useState(12);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortOption, setSortOption] = useState("");

  // Handle Load More functionality
  const handleLoadMore = () => {
    setVisibleItems(AllCardData.length); // Show all items
  };

  // Filtering, Searching, and Sorting Logic
  const filteredData = AllCardData.filter((item) => {
    return (
      (selectedCategory === "All" || item.category === selectedCategory) &&
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }).sort((a, b) => {
    if (sortOption === "priceAsc") return a.price - b.price;
    if (sortOption === "priceDesc") return b.price - a.price;
    if (sortOption === "rating") return b.rating - a.rating;
    if (sortOption === "nameAsc") return a.name.localeCompare(b.name);
    if (sortOption === "nameDesc") return b.name.localeCompare(a.name);
    return 0;
  });

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col sm:flex-row gap-4 mb-4">
        <input
          type="text"
          placeholder="Search by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-2 border rounded flex-1"
        />

        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="p-2 border rounded flex-1"
        >
          <option value="All">All Categories</option>
          <option value="Car Tyre">Car Tyre</option>
          <option value="Bike Tyre">Bike Tyre</option>
          <option value="SUV Tyre">SUV Tyre</option>
          <option value="Truck Tyre">Truck Tyre</option>
        </select>

        <select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          className="p-2 border rounded flex-1"
        >
          <option value="">Sort By</option>
          <option value="priceAsc">Price: Low to High</option>
          <option value="priceDesc">Price: High to Low</option>
          <option value="rating">Rating ⭐</option>
        </select>
      </div>

      <h1 className="text-lg font-semibold p-2">Tyres sold by this Dealer</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {filteredData.slice(0, visibleItems).map((card, index) => (
          <ProductCard key={index} {...card} />
        ))}
      </div>

      {visibleItems < filteredData.length && (
        <div className="text-center mt-4">
          <button className="btn btn-primary" onClick={handleLoadMore}>
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default Product;

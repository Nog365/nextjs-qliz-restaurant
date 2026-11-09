
"use client";

import { useState } from "react";
import MenuCard from "../../components/MenuCard";
import { menuItems } from "../../data/menu";

export default function MenuPage() {
  // Category filter
  const [selectedCategory, setSelectedCategory] =
    useState("All");

  // Search input
  const [searchTerm, setSearchTerm] = useState("");

  const categories = [
    "All",
    "Appetizer",
    "Main Course",
    "Dessert",
    "Beverage",
  ];

  // Filter dishes by category and search
  const filteredItems = menuItems.filter((item) => {
    const matchesCategory =
      selectedCategory === "All" ||
      item.category === selectedCategory;

    const matchesSearch =
      item.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      item.description
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <section className="min-h-screen bg-amber-50 py-16 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Menu Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-emerald-950 mb-6">
            Our Menu
          </h1>

          <p className="text-lg text-gray-700">
            Discover authentic African flavors with a
            contemporary twist.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-xl mx-auto mb-10">
          <input
            type="text"
            placeholder="Search for your favorite dish..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-6 py-4 border border-gray-300 rounded-xl bg-white text-gray-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-700"
          />
        </div>

        {/* Category Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-lg font-semibold transition ${
                selectedCategory === category
                  ? "bg-emerald-900 text-white"
                  : "bg-white text-emerald-900 hover:bg-emerald-100"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Number of Matching Dishes */}
        <p className="text-center text-gray-600 mb-8">
          Showing {filteredItems.length} dishes
        </p>

        {/* Menu Cards */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <MenuCard
                key={item.id}
                name={item.name}
                category={item.category}
                description={item.description}
                price={item.price}
                image={item.image}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold text-emerald-950 mb-4">
              No dishes found
            </h2>

            <p className="text-gray-600">
              Try another search or select a different category.
            </p>
          </div>
        )}

      </div>
    </section>
  );
}

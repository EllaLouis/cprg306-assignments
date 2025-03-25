"use client";

import React, { useState } from "react";

export default function NewItem({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [category, setCategory] = useState("produce");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newItem = {
      name,
      quantity,
      category,
    };

    onAddItem(newItem);
    // Reset form fields
    setName("");
    setQuantity("");
    setCategory("produce");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 border rounded shadow">
      <h2 className="text-lg font-semibold">Add New Item</h2>

      <input
        type="text"
        placeholder="Item Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        className="border p-2 w-full rounded"
      />

      <input
        type="number"
        placeholder="Quantity"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
        required
        className="border p-2 w-full rounded"
      />

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="border p-2 w-full rounded"
      >
        <option value="produce">Produce</option>
        <option value="dairy">Dairy</option>
        <option value="bakery">Bakery</option>
        <option value="meat">Meat</option>
        <option value="frozen">Frozen</option>
        <option value="snacks">Snacks</option>
        <option value="beverages">Beverages</option>
      </select>

      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Add Item
      </button>
    </form>
  );
}
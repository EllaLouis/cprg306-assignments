import React, { useState } from 'react';

export default function NewItem() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [category, setCategory] = useState("produce");

  const handleSubmit = (e) => {
    e.preventDefault();

    const item = {
      name: name,
      quantity: quantity,
      category: category,
    };

    console.log("Item:", item);

    alert(`Name: ${name}\nQuantity: ${quantity}\nCategory: ${category}`);

    setName("");
    setQuantity("");
    setCategory("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto bg-white shadow-lg rounded-2xl p-6 space-y-4"
    >

      <div>
        <label className="block text-gray-700 font-medium mb-1">Name:</label>
        <input
          type="text"
          placeholder="Enter Item Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full px-4 py-2 border rounded-lg text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block text-gray-700 font-medium mb-1">Category:</label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        >

          <option value="">Select a category</option>
          <option value="produce" className="text-gray-800 bg-white">Produce</option>
          <option value="Dairy" className="text-gray-800 bg-white">Dairy</option>
          <option value="Bakery" className="text-gray-800 bg-white">Bakery</option>
          <option value="Meat" className="text-gray-800 bg-white">Meat</option>
          <option value="Frozen Foods" className="text-gray-800 bg-white">Frozen Foods</option>
          <option value="Canned Goods" className="text-gray-800 bg-white">Canned Goods</option>
          <option value="Dry Goods" className="text-gray-800 bg-white">Dry Goods</option>
          <option value="Beverages" className="text-gray-800 bg-white">Beverages</option>
          <option value="Snacks" className="text-gray-800 bg-white">Snacks</option>
          <option value="Household" className="text-gray-800 bg-white">Household</option>
          <option value="Other" className="text-gray-800 bg-white">Other</option>
        </select>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded-xl transition duration-300">
        Submit
      </button>
    </form>
  );
};
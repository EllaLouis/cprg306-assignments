"use client";

import React, { useState } from "react";
import Item from "./item.js";
import items from "./items.json";

export default function ShoppingList() {
    const [sortBy, setSortBy] = useState("name");

    let sortedItems;

    if (sortBy === "group") {
        const grouped = items.reduce((acc, item) => {
            acc[item.category] = acc[item.category] || [];
            acc[item.category].push(item);
            return acc;
        }, {});

        sortedItems = Object.entries(grouped)
            .sort(([a], [b]) => a.localeCompare(b))
            .map(([category, items]) => ({
                category,
                items: items.sort((a, b) => a.name.localeCompare(b.name)),
            }));
    } else {

        sortedItems = [...items].sort((a, b) => a[sortBy].localeCompare(b[sortBy]));
    }

    return (
        <div className="p-4">
            <h1 className="text-xl font-bold mb-4">Shopping List</h1>

            {/* Sorting Buttons */}
            <div className="space-x-2 mb-4">
                {["name", "category", "group"].map((type) => (
                    <button
                        key={type}
                        onClick={() => setSortBy(type)}
                        className={`px-4 py-2 border rounded capitalize ${sortBy === type ? "bg-blue-500 text-white" : "bg-gray-300"
                            }`}
                    >
                        {type === "group" ? "Group by Category" : `Sort by ${type}`}
                    </button>
                ))}
            </div>

            {/* Display Items */}
            {sortBy === "group"
                ? sortedItems.map(({ category, items }) => (
                    <div key={category}>
                        <h2 className="text-lg font-semibold capitalize mt-4">{category}</h2>
                        <ul>{items.map((item) => <Item key={item.id} {...item} />)}</ul>
                    </div>
                ))
                : sortedItems.map((item) => <Item key={item.id} {...item} />)}
        </div>
    );
}



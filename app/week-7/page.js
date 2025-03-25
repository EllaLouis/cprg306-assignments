"use client";
import { useState, useEffect } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import mealIdeas from "./meal-ideas";
import itemsData from "./items.json";

export default function Page() {
    const [items, setItems] = useState([]);
    const [selectedItemName, setSelectedItemName] = useState("");

    useEffect(() => {
        setItems(itemsData);
    }, []);

    const handleAddItem = (newItem) => {
        setItems((prevItems) => [...prevItems, newItem]);
    };

    const handleItemSelect = (item) => {
        const cleanedItemName = item.name
            .split(",")[0] // Get the part before the comma
            .replace(/[^\w\s]/g, "")  // Remove emojis and non-alphanumeric characters
            .trim(); // Trim extra spaces

        setSelectedItemName(cleanedItemName); // Set the cleaned name
    };

    return (
        <div className="flex space-x-8 p-8">
            <div className="flex-1">
                <NewItem onAddItem={handleAddItem} />
                <ItemList items={items} onItemSelect={handleItemSelect} />
            </div>

            <div className="flex-1">
                <MealIdeas ingredient={selectedItemName} />
            </div>
        </div>
    );
}
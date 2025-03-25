"use client";
import { useState, useEffect } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import itemsData from "./items.json";

export default function Page() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        setItems(itemsData);
    }, []);

    const handleAddItem = (newItem) => {
        setItems((prevItems) => [...prevItems, newItem]);
    };

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Shopping List App</h1>

            <NewItem onAddItem={handleAddItem} />

            <ItemList items={items} />
        </div>
    );
}

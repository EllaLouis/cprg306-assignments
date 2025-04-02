"use client";
import { useState, useEffect } from "react";
import NewItem from "../new-item";
import ItemList from "../item-list";
import MealIdeas from "../meal-ideas";
import { getItems, addItem } from "../shopping-list-service";
import { useUserAuth } from "../_utils/auth-context";

export default function ShoppingListPage() {
    const { user } = useUserAuth();
    const [items, setItems] = useState([]);
    const [selectedItemName, setSelectedItemName] = useState("");

    const loadItems = async () => {
        if (!user) return;
        const userItems = await getItems(user.uid);
        setItems(userItems);
    };

    useEffect(() => {
        if (user) {
            loadItems();
        }
    }, [user]);

    const handleAddItem = async (newItem) => {
        if (!user) return;
        const newItemId = await addItem(user.uid, newItem);
        setItems([...items, { id: newItemId, ...newItem }]);
    };

    const handleItemSelect = (item) => {
        if (!item || !item.name) return;
        const cleanedItemName = item.name.replace(/[^a-zA-Z ]/g, "").trim();
        setSelectedItemName(cleanedItemName);
    };

    // If the user is not logged in, show a message
    if (!user) return <p>Please log in to see your shopping list.</p>;

    return (
        <div className="p-6 flex">
            <div className="w-1/2">
                <NewItem onAddItem={handleAddItem} />
                <ItemList items={items} onItemSelect={handleItemSelect} />
            </div>
            <div className="w-1/2">
                <MealIdeas ingredient={selectedItemName} />
            </div>
        </div>
    );
}

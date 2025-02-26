"use client";
import { useState } from "react";
import NewItem from './new-item.js';

export default function Page() {
    const [quantity, setQuantity] = useState(1);


    const increment = () => {
        setQuantity((prevQuantity) => (prevQuantity < 20 ? prevQuantity + 1 : prevQuantity));
    };

    const decrement = () => {
        setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : prevQuantity));
    };


    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-800 text-white p-6">
            <NewItem quantity={quantity} />

            <div className="text-2xl font-semibold my-4">{quantity}</div>

            <button
                onClick={decrement}
                disabled={quantity === 1}
                className={`px-4 py-2 text-white rounded-lg transition-all ${quantity === 1 ? "bg-gray-400 cursor-not-allowed" : "bg-red-500 hover:bg-red-600"
                    }`} > -</button>

            <button
                onClick={increment}
                disabled={quantity === 20}
                className={`px-4 py-2 text-white rounded-lg transition-all ${quantity === 20 ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"
                    }`}>+</button>
        </div>
    );
}
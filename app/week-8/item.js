"use client";

import React from "react";

export default function Item({ id, name, quantity, category, onSelect }) {

    const item = { id, name, quantity, category };

    return (
        <li
            onClick={() => onSelect(item)}
            className="p-2 border-b cursor-pointer hover:bg-gray-100"
        >
            <span className="font-semibold">{name}</span> - {quantity} ({category})
        </li>
    );
}
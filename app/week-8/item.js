"use client";

import React from "react";

export default function Item({ id, name, quantity, category, onSelect }) {
    return (
        <li
            onClick={() => onSelect && onSelect({ id, name, quantity, category })}
            className="p-2 border-b cursor-pointer hover:bg-gray-100"
        >
            <span className="font-semibold">{name}</span> - {quantity} ({category})
        </li>
    );
}

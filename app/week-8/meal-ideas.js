"use client"
import { useState, useEffect } from "react";

export default function mealIdeas({ ingredient }) {
    const [meals, setMeals] = useState([]);


    async function fetchMealIdeas(ingredient) {
        const response = await fetch(
            `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
        );

        const data = await response.json();
        return data.meals || [];
    }

    async function loadMealIdeas() {
        if (!ingredient) return;
        const mealData = await fetchMealIdeas(ingredient);
        setMeals(mealData);
    }

    useEffect(() => {
        loadMealIdeas();
    }, [ingredient]);

    return (
        <div className="p-4 border rounded shadow">
            <h2 className="text-lg font-semibold mb-4">Meal Ideas for {ingredient}</h2>
            <ul className="list-disc pl-5">
                {meals.length > 0 ? (
                    meals.map((meal) => (
                        <li key={meal.idMeal} className="mb-2">
                            {meal.strMeal}
                        </li>
                    ))
                ) : (
                    <p>No meal ideas found.</p>
                )}
            </ul>
        </div>
    );
}


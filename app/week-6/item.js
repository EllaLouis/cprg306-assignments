export default function Item({ name, category }) {
    return <li>{name} - {category}</li>;
};

const Item = ({ name, quantity, category }) => {

    { id: 1, name; "Apple", category; "Fruit" }
    { id: 2, name; "Carrot", category; "Vegetable" }

    return (
        <li className="p-4 border-b border-gray-300 flex justify-left">
            <div>
                <p className="text-lg font-semibold">{name}</p>
                <p className="text-sm text-gray-500">Category: {category}</p>
            </div>
            <span className="text-blue-600 font-medium">{quantity}</span>
        </li>
    );
};


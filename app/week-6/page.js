import ItemList from './item-list.js';

export default function Page() {
    return (
        <main className="bg-gray-100 min-h-screen flex flex-col items-center p-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Shopping List</h1>
            <ItemList />
        </main>
    );
}


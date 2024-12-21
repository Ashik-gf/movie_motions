"use client"
import { useState } from "react";
const SearchModal = ({ onSearchChange, closeModal }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const handleChange = (event) => {
        setSearchTerm(event.target.value);
        onSearchChange(event.target.value); // Pass the search term to the parent component
    };
    return (

        <div className="bg-zinc-900 p-6 rounded-lg w-full max-w-2xl">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-white">Search Movie</h2>
                <button onClick={closeModal}
                    className="text-gray-400 hover:text-white">✕</button>
            </div>
            <input
                value={searchTerm}
                onChange={handleChange}
                type="text"
                placeholder="Type movie name..."
                className="w-full bg-zinc-800 text-white px-4 py-2 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-red-600"
            />
            <div className="max-h-96 overflow-y-auto"></div>
        </div>

    )
}

export default SearchModal
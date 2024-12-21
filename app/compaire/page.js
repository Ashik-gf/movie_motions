"use client"
import { useState } from "react";
import Navbar from "../components/Navbar";
import CompaireCard from "../components/compaireCard/CompaireCard";

const Compaire = () => {
    const [container, setContainer] = useState([]);
    const handleAddMovie = () => {
        const newCard = {
            id: Date.now(), // Unique ID for each card
            component: <CompaireCard />,
        };
        setContainer([...container, newCard]);
    };
    const handleRemoveMovie = (id) => {
        setContainer(container.filter((card) => card.id !== id));
    };

    return (
        <main className=" bg-black">
            <Navbar />
            <div className="container mx-auto px-4 py-24 pb-8">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold">Compare Movies</h1>
                    <button
                        onClick={handleAddMovie}
                        className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition-colors"
                    >
                        Add Movie +
                    </button>
                </div>
                {/* */}
                <div className="grid gap-6 md:grid-cols-2">
                    {container.map((card) => (
                        <CompaireCard key={card.id} id={card.id} onCancel={handleRemoveMovie} />
                    ))}
                </div>
            </div>
        </main>
    );
};

export default Compaire;
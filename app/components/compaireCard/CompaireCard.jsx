"use client"

import { getPopulerMovies } from "@/app/api/route";
import SearchModal from "@/utils/SearchModal";
import { useEffect, useState } from "react";
import CompaireDetailsCard from "./CompaireDetailsCard";
import SearchListCard from "./SearchListCard";

const CompaireCard = ({ onCancel, id }) => {
    const [openMOdal, setOpenModal] = useState(false);
    const [selectedMovie, setSelectedMovie] = useState({})
    // test
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    useEffect(() => {
        const fetchMovies = async () => {
            const fetchedMovies = await getPopulerMovies(); // Fetch all movies
            setMovies(fetchedMovies.results);

        };
        fetchMovies();
    }, []);

    useEffect(() => {
        const filteredMovies = movies.filter((movie) =>
            movie.original_title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setSearchResults(filteredMovies);
    }, [searchTerm, movies]);

    const handleSearchChange = (newSearchTerm) => {
        setSearchTerm(newSearchTerm);
    };
    // test
    const handelOpenmodal = () => {
        setOpenModal(!openMOdal)
    }
    const handelTakeMovie = (id) => {
        const findMovie = movies.find((movie) => movie.id === id);
        setSelectedMovie(findMovie)
        setOpenModal(false)
    }
    return (
        <div className="relative bg-zinc-900 rounded-lg p-4 flex flex-col border-2">
            <div className="bg-zinc-900 rounded-lg p-4 flex flex-col min-h-[400px]">
                <div className="flex justify-end mb-4">
                    <button
                        onClick={() => onCancel(id)}
                        className="text-gray-400 hover:text-white">✕</button>
                </div>
                {
                    Object.keys(selectedMovie).length > 0 ? <div className=" text-white">
                        <CompaireDetailsCard movie={selectedMovie} />
                    </div> : <div className="flex-grow flex flex-col items-center justify-center">
                        <button
                            onClick={handelOpenmodal}
                            className="bg-zinc-800 text-white px-6 py-3 rounded hover:bg-zinc-700 transition-colors cursor-pointer"
                        >
                            Select Movie
                        </button>
                    </div>
                }

            </div>
            {
                openMOdal && <div className="fixed w-full inset-0 bg-opacity-80 flex flex-col items-center justify-center z-50">
                    <SearchModal
                        onSearchChange={handleSearchChange}
                        closeModal={handelOpenmodal}
                    />
                    <div className=" bg-zinc-900 space-y-2 w-[300px] h-[300px] overflow-y-auto lg:w-[600px]">
                        {
                            searchResults.map((movie) => <SearchListCard
                                takeMovie={handelTakeMovie}
                                key={movie.id}
                                movie={movie} />)
                        }
                    </div>
                </div>
            }
        </div>

    )
}

export default CompaireCard
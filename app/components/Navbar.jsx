"use client"
import Link from "next/link";
import { useEffect, useState } from "react";
import { getPopulerMovies } from "../api/route";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults/SearchResults";

const Navbar = () => {
    const [openMOdal, setOpenModal] = useState(false);
    const [selectedMovie, setSelectedMovie] = useState({})
    const [searchStrem, setSearchStrem] = useState('')
    // almovies
    const [movies, setMovies] = useState([]);
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
            movie.original_title.toLowerCase().includes(searchStrem.toLowerCase())
        );
        setSearchResults(filteredMovies);
    }, [searchStrem, movies]);
    const handleChange = (search) => {
        setSearchStrem(search);
        // onSearchChange(event.target.value); // Pass the search term to the parent component
    };
    return (
        <nav className={` relative w-full z-50 bg-gradient-to-b from-black to-transparent`}>
            <div
                className="container mx-auto px-4 py-6 flex justify-between items-center"
            >
                <div className="flex items-center">
                    <Link href="./index.html" className="text-red-600 text-4xl font-bold"
                    >MOVIE DB </Link >
                    <div className="ml-8 space-x-4">
                        <Link href="/" className="text-white hover:text-gray-300"
                        >Home</Link>
                        <Link href={`/compaire`} className="text-white hover:text-gray-300"
                        >Compare Movies</Link>
                        <Link href="/watch" className="text-white hover:text-gray-300"
                        >Watch Later</Link>
                    </div>
                </div>
                <SearchBar onSearch={handleChange} searchtrem={searchStrem} />
            </div>

            {
                Object.keys(searchStrem).length > 0 && <div className=" absolute top-20 bg-black bg-opacity-80 ">
                    <SearchResults searchResults={searchResults} />
                </div>
            }
        </nav>
    )
}

export default Navbar
"use client"

import { getAllmovies } from "@/app/api/route";
import Image from "next/image";
import { useEffect, useState } from "react";

const CompaireDetailsCard = ({ movie }) => {
    const [movieData, setMovieData] = useState({});
    const id = movie.id;
    if (id) {
        useEffect(() => {
            const fetchDetails = async (id) => {
                const data = await getAllmovies(id);
                setMovieData(data)
            }
            fetchDetails(id)
        }, [id])
    }
    return (
        <div className="grid gap-6">
            <div className="bg-zinc-900 rounded-lg p-4 flex flex-col">
                <div className="grid grid-cols-5 gap-8">
                    <div className="col-span-2 h-full">
                        <Image
                            width={100}
                            height={100}
                            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                            alt={movie.original_title}
                            className="w-full rounded-lg mb-4 object-contain max-h-full"
                        />
                        <h2 className="text-xl font-bold mb-2 text-center">{movieData.original_title}</h2>
                    </div>
                    <div className="w-full space-y-4 col-span-3">
                        <div className="bg-zinc-800 p-3 rounded">
                            <span className="text-gray-400">Rating:</span>
                            <span className="float-right">${movieData.vote_average}
                                /10</span>
                        </div>
                        <div className="bg-zinc-800 p-3 rounded">
                            <span className="text-gray-400">Release Year:</span>
                            <span className="float-right">{movieData.release_date}</span>
                        </div>
                        <div className="bg-zinc-800 p-3 rounded">
                            <span className="text-gray-400">Runtime:</span>
                            <span className="float-right">{movieData.runtime} min</span>
                        </div>
                        <div className="bg-zinc-800 p-3 rounded">
                            <span className="text-gray-400">Budget:</span>
                            <span className="float-right">${movieData.budget}</span>
                        </div>
                        <div className="bg-zinc-800 p-3 rounded">
                            <span className="text-gray-400">Revenue:</span>
                            <span className="float-right">{movieData.revenue}</span>
                        </div>
                        <div className="bg-zinc-800 p-3 rounded">
                            <span className="text-gray-400">Genres:</span>
                            <div className="mt-2 flex flex-wrap gap-2">
                                {/* {
                                    movieData.genres.map((data) => <span key={data.id} className="bg-zinc-700 px-2 py-1 rounded-full text-sm">{data.name} </span>)
                                } */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CompaireDetailsCard
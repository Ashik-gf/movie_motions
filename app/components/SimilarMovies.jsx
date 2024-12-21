
import { getRelatedMovies } from "../api/route";
import MovieCard from "./MovieCard";

const SimilarMovies = async ({ id }) => {
    const data = await getRelatedMovies(id)
    return (
        <div className="container mx-auto px-4 py-20">
            <h2 className="text-2xl font-bold mb-4">More Like This</h2>
            <div className="flex space-x-4 overflow-x-auto pb-4">
                {
                    data.results.map((movie) => <MovieCard key={movie.id} movie={movie} />)
                }
            </div>
        </div>
    )
}

export default SimilarMovies
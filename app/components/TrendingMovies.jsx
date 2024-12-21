
import { getTrendingMovies } from "../api/route";
import MovieCard from "./MovieCard";

const TrendingMovies = async () => {
    const data = await getTrendingMovies();
    return (
        <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Trending Now</h2>
            <div id="trendingMovies" className="flex space-x-4 overflow-x-auto pb-4">
                {
                    data.results.map((movie) => <MovieCard key={movie.id} movie={movie} />)
                }
            </div>
        </section>
    )
}

export default TrendingMovies
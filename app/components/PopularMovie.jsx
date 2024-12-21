
import { getPopulerMovies } from "../api/route";
import PopulerMovieCard from "./PopulerMovieCard";

const PopularMovie = async () => {
    const data = await getPopulerMovies();
    return (
        <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Popular on MOVIE DB</h2>
            <div id="popularMovies" className="flex space-x-4 overflow-x-auto pb-4">
                {
                    data.results.map((movie) => <PopulerMovieCard key={movie.id} movie={movie} />)
                }
            </div>

        </section>
    )
}

export default PopularMovie
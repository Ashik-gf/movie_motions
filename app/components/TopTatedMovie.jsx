
import { getTopRatedMovie } from "../api/route";
import TopRetedCard from "./TopRetedCard";

const TopTatedMovie = async () => {
    const data = await getTopRatedMovie();
    return (
        <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Top Rated</h2>
            <div id="topRatedMovies" className="flex space-x-4 overflow-x-auto pb-4">
                {
                    data.results.map((movie) => <TopRetedCard key={movie.id} movie={movie} />)
                }
            </div>
        </section>
    )
}

export default TopTatedMovie
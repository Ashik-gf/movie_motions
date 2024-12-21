
import PopularMovie from "./PopularMovie";
import TopTatedMovie from "./TopTatedMovie";
import TrendingMovies from "./TrendingMovies";

const AllMovieList = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            {/* <!-- Trending Movies --> */}
            <TrendingMovies />

            {/* <!-- Popular Movies --> */}
            <PopularMovie />
            {/* <!-- Top Rated Movies --> */}
            <TopTatedMovie />
        </div>
    )
}

export default AllMovieList
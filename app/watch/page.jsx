import { getWatchList } from "../actions/userActions";
import NavbarDetailsPage from "../components/NavbarDetailsPage";
import EmptyCard from "../components/WatchListMovieCard/EmptyCard";
import WatchCard from "../components/WatchListMovieCard/WatchListMovieCard";
const WatchList = async () => {
    const watchLateList = await getWatchList();
    return (
        <div>
            <NavbarDetailsPage />
            <div className="container mx-auto pt-24 pb-8">
                <header className="mb-8">
                    <h1 className="text-4xl font-bold text-white">Watch Later</h1>
                    <p className="text-light/70 mt-2">
                        Movies you have saved to watch in the future
                    </p>
                </header>
                {
                    watchLateList.length > 0 && <div
                        class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {
                            watchLateList.map((movie) => <WatchCard key={movie.id} movie={movie} />)
                        }
                    </div>
                }
                {
                    watchLateList.length < 0 && <EmptyCard />
                }
            </div>
        </div>
    )
}

export default WatchList
"use client"
import { useAuth } from "@/hooks/useAuth";
import WatchCard from "./WatchListMovieCard";

const WatchSections = ({ watchLateList }) => {
    const { auth } = useAuth();

    // Filter watchlist based on authenticated user (if available)
    const filteredWatchList = auth?.email
        ? watchLateList.filter((movie) => movie.user === auth.email)
        : [];
    return (
        <div>
            {filteredWatchList.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {filteredWatchList.map((movie) => (
                        <WatchCard key={movie.id} movie={movie} />
                    ))}
                </div>
            )}

            {auth?.user && filteredWatchList.length === 0 && <EmptyCard />}

            {!auth && watchLateList.length === 0 && <EmptyCard />}
        </div>
    );
};

export default WatchSections;
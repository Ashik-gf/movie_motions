import Image from "next/image";
import Link from "next/link";

const SearchResults = ({ searchResults }) => {
    return (
        <main className="container mx-auto px-4 pt-24 pb-8">
            {/* <!-- Search Stats --> */}
            <div className="mb-6">
                <h1 className="text-2xl font-bold">Search Results for "Avatar"</h1>
                <p className="text-gray-400">Found <span>{searchResults.length}</span> results</p>
            </div>
            {/* <!-- Filters and Sort Section --> */}
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                {/* <!-- Movie Card 1 --> */}
                {
                    searchResults.map((movie) => <Link
                        href={`/movie/${movie.id}`}
                        className="bg-zinc-900 text-white rounded-lg overflow-hidden hover:scale-105 transition-transform">
                        <Image
                            width={100}
                            height={100}
                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                            alt="Avatar: The Way of Water"
                            className="w-full aspect-[2/3] object-cover"
                        />
                        <div className="p-4">
                            <h3 className="font-bold mb-2">{movie.original_title}</h3>
                            <div className="flex justify-between text-sm text-gray-400">
                                <span>{movie.release_date}</span>
                                <span>⭐ 7.7</span>
                            </div>
                        </div>
                    </Link>)
                }

            </div>
        </main>
    )
}

export default SearchResults
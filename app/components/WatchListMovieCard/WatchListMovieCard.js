import Image from "next/image"

const WatchCard = ({ movie }) => {
    return (
        <div className=" bg-moviedb-black rounded-lg overflow-hidden shadow-lg group relative">
            <Image width={100} height={100}
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                alt="Armor"
                className="w-full h-[450px] object-cover"
            />
            <div
                className="absolute inset-0 bg-black/50 text-white opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <h2 className="text-xl font-bold text-light mb-2">{movie.original_title}</h2>
                <div className="flex justify-between items-center">
                    <span className="text-primary">{movie.release_date}</span>
                    <button
                        className="bg-red-500 text-light px-3 py-1 rounded-full hover:bg-moviedb-red/80 transition">
                        Remove
                    </button>
                </div>
            </div>
        </div>
    )
}

export default WatchCard
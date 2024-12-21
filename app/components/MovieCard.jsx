import Image from "next/image";
import Link from "next/link";

const MovieCard = ({ movie }) => {
    const { original_title, poster_path, id, title, release_date } = movie;
    return (
        <div
            className="flex-shrink-0 w-48 cursor-pointer hover:scale-105 transition-transform"
        >
            <Link href={`/movie/${id}`}>
                <Image
                    width={100}
                    height={100}
                    src={`https://image.tmdb.org/t/p/original${poster_path}`}
                    alt={original_title}
                    className="w-full rounded-lg"
                />
                <div className="mt-2">
                    <h3 className="text-light text-sm font-bold truncate">{title}</h3>
                    <p className="text-primary text-xs">{release_date}</p>
                </div>
            </Link>
        </div>
    )
}

export default MovieCard
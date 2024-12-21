import Image from "next/image"
import Link from "next/link"

const TopRetedCard = ({ movie }) => {
    const { adult, backdrop_path, genre_ids, original_title, poster_path, id } = movie
    return (

        <div
            className="flex-shrink-0 w-48 cursor-pointer hover:scale-105 transition-transform">
            <Link href={`/movie/${id}`}>
                <Image
                    width={100}
                    height={100}
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={original_title}
                    className="w-full rounded-lg"
                />
            </Link>
        </div>

    )
}

export default TopRetedCard
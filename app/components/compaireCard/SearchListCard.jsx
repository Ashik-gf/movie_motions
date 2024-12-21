import Image from 'next/image'

const SearchListCard = ({ movie, takeMovie }) => {

    return (
        <div
            className=' space-y-2 shadow-md py-4 flex gap-2 cursor-pointer'
            onClick={() => takeMovie(movie.id)}
        >
            <Image
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                alt={movie.original_title}
                width={70}
                height={70}
                className=''
            />
            <div className="flex flex-col gap-1 text-white">
                <p>{movie.original_title}</p>
                <p>{movie.release_date}</p>
            </div>

        </div>
    )
}

export default SearchListCard
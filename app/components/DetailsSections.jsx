import Button from "@/utils/Button";
import Image from "next/image";
import { getAllmovies } from "../api/route";
import AuthContextProvider from "../providers/AuthContextProvider";





const DetailsSections = async ({ id }) => {
    const data = await getAllmovies(id);

    return (
        <div id="movieDetails" className="min-h-screen mb-8">
            <div className="relative h-screen">
                <div className="absolute inset-0">
                    <Image width={100} height={100}
                        src={`https://image.tmdb.org/t/p/original${data.backdrop_path}`}
                        alt="Smile 2"
                        className="w-full h-full object-cover"
                    />
                    <div
                        className="absolute inset-0 bg-gradient-to-t from-black via-black/70"
                    ></div>
                </div>

                <div className="relative container mx-auto px-4 pt-32">
                    <div className="flex flex-col md:flex-row gap-8">
                        <div className="md:w-1/3">
                            <Image width={100} height={100}
                                src={`https://image.tmdb.org/t/p/original${data.poster_path}`}
                                alt="Smile 2"
                                className="w-full rounded-lg shadow-lg" />
                        </div>

                        <div className="md:w-2/3">
                            <h1 className="text-4xl font-bold mb-4">{data.original_title}</h1>

                            <div className="flex items-center mb-4 space-x-4">
                                <span className="text-green-500"> {data.release_date} </span>
                                <span>| </span>
                                <span>127 min</span>
                            </div>

                            <p className="text-lg mb-6">
                                {data.overview}
                            </p>

                            <div className="mb-6">
                                <h3 className="text-gray-400 mb-2">Genres</h3>
                                <div className="flex flex-wrap gap-2">
                                    {
                                        data.genres.map((genr) => <span key={genr.id} className="px-3 py-1 bg-gray-800 rounded-full text-sm">
                                            {genr.name} </span>)
                                    }

                                </div>
                            </div>

                            <div className="mb-6">
                                <h3 className="text-gray-400 mb-2">Cast</h3>
                                <div className="flex flex-wrap gap-4">
                                    <div className="text-center">
                                        <Image width={100} height={100}
                                            src="https://image.tmdb.org/t/p/original/6OLe7TskbEvYpo36eITfX91VoCP.jpg"
                                            alt="Naomi Scott"
                                            className="w-24 h-24 rounded-full object-cover mb-2"
                                        />
                                        <p className="text-sm">Naomi Scott</p>
                                    </div>

                                    <div className="text-center">
                                        <Image width={100} height={100}
                                            src="https://image.tmdb.org/t/p/original/44sxIdGtYN24R14OmnZbCpcd8J8.jpg"
                                            alt="Rosemarie DeWitt"
                                            className="w-24 h-24 rounded-full object-cover mb-2"
                                        />
                                        <p className="text-sm">Rosemarie DeWitt</p>
                                    </div>

                                    <div className="text-center">
                                        <Image width={100} height={100}
                                            src="https://image.tmdb.org/t/p/original/j7Zub5J9PgCnsfgEC5QCr160JtH.jpg"
                                            alt="Lukas Gage"
                                            className="w-24 h-24 rounded-full object-cover mb-2"
                                        />
                                        <p className="text-sm">Lukas Gage</p>
                                    </div>

                                    <div className="text-center">
                                        <Image width={100} height={100}
                                            src="https://image.tmdb.org/t/p/original/22JmiXEKoIHTKAdZaxOiS5wVHnM.jpg"
                                            alt="Miles Gutierrez-Riley"
                                            className="w-24 h-24 rounded-full object-cover mb-2"
                                        />
                                        <p className="text-sm">Miles Gutierrez-Riley</p>
                                    </div>

                                    <div className="text-center">
                                        <Image width={100} height={100}
                                            src="https://image.tmdb.org/t/p/original/pGi9CnzEG4cLa2viUP89yvlPCyR.jpg"
                                            alt="Peter Jacobson"
                                            className="w-24 h-24 rounded-full object-cover mb-2"
                                        />
                                        <p className="text-sm">Peter Jacobson</p>
                                    </div>
                                </div>
                            </div>

                            {/* button work in pending */}
                            <AuthContextProvider>
                                <Button data={data} />
                            </AuthContextProvider>
                            <div className="mb-6">
                                <h3 className="text-gray-400 mb-2">Share on social media</h3>
                                <div className="flex flex-wrap gap-4">
                                    <button className="text-center cursor-pointer">
                                        {/* <Image width={100} height={100}
                                            src="http://facebook.com/favicon.ico"
                                            alt="Facebook"
                                            className="w-8 h-8 rounded-full object-cover mb-2 mx-auto"
                                        /> */}
                                        <p className="text-sm">Facebook</p>
                                    </button>

                                    <button className="text-center cursor-pointer">
                                        {/* <Image width={100} height={100}
                                            src="http://x.com/favicon.ico"
                                            alt="Facebook"
                                            className="w-8 h-8 rounded-full object-cover mb-2 mx-auto"
                                        /> */}
                                        <p className="text-sm">X</p>
                                    </button>

                                    <button className="text-center cursor-pointer">
                                        {/* <Image width={100} height={100}
                                            src="http://linkedin.com/favicon.ico"
                                            alt="Facebook"
                                            className="w-8 h-8 rounded-full object-cover mb-2 mx-auto"
                                        /> */}
                                        <p className="text-sm">Linkedin</p>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailsSections
"use client"
import { addWatchList, getWatchList } from "@/app/actions/userActions";
import { useAuth } from "@/app/hooks/useAuth";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
const Button = ({ data }) => {
    const { auth, setAuth } = useAuth()
    const router = useRouter();
    const [isAdd, setIsAdd] = useState()
    console.log(auth);
    const movieData = {
        original_title: data.original_title,
        release_date: data.release_date,
        poster_path: data.poster_path,
        id: data.id
    }
    const handelWatch = async () => {
        if (!auth || !auth.email) {
            router.push('/auth/login');
        } else {
            return await addWatchList(movieData)
        }
    }

    useEffect(() => {
        const fetchWatchList = async () => {
            const watchLateList = await getWatchList();
            const isAdded = watchLateList.some((movie) => movie.id === data.id);
            setIsAdd(isAdded);
        }
        fetchWatchList()
    }, [data])
    return (
        <div className="mb-6">
            <div className="flex flex-wrap gap-4">
                {/* Add to searchlist */}
                <div className="text-center">
                    <button
                        onClick={handelWatch}
                        className="flex items-center gap-2 bg-black/40 px-4 py-2 rounded-lg">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="icon icon-tabler icons-tabler-outline icon-tabler-file-plus"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                            <path
                                d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"
                            />
                            <path d="M12 11l0 6" />
                            <path d="M9 14l6 0" />
                        </svg>
                        Watch Later
                    </button>
                </div>
                {/* Added to search List */}
                <div className="text-center">
                    <button
                        className={`${isAdd ? 'text-green-500' : 'text-white'} flex items-center gap-2 px-4 py-2 rounded-lg `}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="icon icon-tabler icons-tabler-outline icon-tabler-checks"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M7 12l5 5l10 -10" />
                            <path d="M2 12l5 5m5 -5l5 -5" />
                        </svg>
                        Added to Wacth List
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Button
"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { performLogin } from "../../actions/userActions";
import { useAuth } from "../../hooks/useAuth";

const Login = () => {
    const [error, setError] = useState("");
    const router = useRouter();
    const { auth, login, setAuth } = useAuth();
    async function onSubmit(event) {
        event.preventDefault();
        try {
            const formData = new FormData(event.currentTarget);
            const found = await performLogin(formData);
            console.log(login);
            if (found) {
                login(found);
                router.push('/');
            } else {
                setError('Please provide a valid login credential');
            }
        } catch (err) {
            setError(err.message);
        }
    }
    return (
        <div className="bg-moviedb-black min-h-screen flex items-center justify-center">
            <div className="w-full max-w-md bg-black/70 rounded-lg p-8 shadow-xl">
                <div className="text-center mb-6">
                    <h1 className="text-white text-3xl font-bold mb-4">Sign In</h1>

                    <form onSubmit={onSubmit}
                        className="space-y-4">
                        <input
                            type="email"
                            name="email"
                            placeholder="Email or phone number"
                            className="w-full p-3 bg-moviedb-gray text-black rounded focus:outline-none focus:ring-2 focus:ring-moviedb-red"
                            required
                        />
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            className="w-full p-3 bg-moviedb-gray text-black rounded focus:outline-none focus:ring-2 focus:ring-moviedb-red"
                            required
                        />
                        <button
                            type="submit"
                            className="w-full bg-moviedb-red text-white py-3 rounded hover:bg-red-700 transition duration-300"
                        >
                            Sign In
                        </button>
                    </form>

                    <div className="mt-4 flex justify-between text-moviedb-gray text-sm">
                        <label className="flex items-center">
                            <input type="checkbox" className="mr-2" />
                            Remember me
                        </label>
                        <Link href="#" className="hover:underline">Need help?</Link>
                    </div>

                    <div className="mt-6 text-moviedb-gray">
                        New to moviedb?
                        <Link href="#" className="text-white hover:underline">Sign up now</Link>
                    </div>
                </div>
                <p className=" text-center text-red-500">{error}</p>
            </div>
        </div>
    )
}

export default Login
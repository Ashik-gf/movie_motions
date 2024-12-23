"use client"
import { AuthContext } from "@/app/contexts";
import { useContext } from "react";


export const useAuth = () => {
    const { auth, setAuth, login, logout } = useContext(AuthContext);
    return { auth, setAuth, login, logout }
}
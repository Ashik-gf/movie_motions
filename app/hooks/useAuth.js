"use client"
import { useContext } from "react";
import { AuthContext } from "../contexts";

export const useAuth = () => {
    const { auth, setAuth, login, logout } = useContext(AuthContext);
    return { auth, setAuth, login, logout }
}
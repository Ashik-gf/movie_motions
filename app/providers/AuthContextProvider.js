"use client"

import { useEffect, useState } from "react";
import { AuthContext } from "../contexts";

const AuthContextProvider = ({ children }) => {
    const [auth, setAuth] = useState(null);
    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setAuth(JSON.parse(storedUser));
        }
    }, []);

    const login = (userData) => {
        setAuth(userData);
        localStorage.setItem('user', JSON.stringify(userData));
    };

    const logout = () => {
        setAuth(null);
        localStorage.removeItem('user');
    };
    return (
        <AuthContext.Provider value={{ auth, setAuth, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider
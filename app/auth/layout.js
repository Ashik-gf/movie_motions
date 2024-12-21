import { Inter } from "next/font/google";
import "../globals.css";
import AuthContextProvider from "../providers/AuthContextProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "User",
    description: "This is a assignments of number 7",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <AuthContextProvider>
                <body className={inter.className}>{children}</body>
            </AuthContextProvider>
        </html>
    );
}

import NavbarDetailsPage from "../components/NavbarDetailsPage";
import AuthContextProvider from "../providers/AuthContextProvider";

export const metadata = {
    title: "Watch LIst",
    description: "Movie WatchList",
};
export default function WatchLayout({ children }) {
    return (
        <div>
            <NavbarDetailsPage />
            <AuthContextProvider>
                {children}
            </AuthContextProvider>
        </div>
    );
}
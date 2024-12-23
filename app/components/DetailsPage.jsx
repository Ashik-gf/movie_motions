import DetailsSections from "./DetailsSections";
import NavbarDetailsPage from "./NavbarDetailsPage";
import SimilarMovies from "./SimilarMovies";

const DetailsPage = ({ id }) => {
    return (
        <div className="bg-black text-white">
            {/* <!-- Navigation --> */}
            <NavbarDetailsPage />

            {/* <!-- Movie Details Section --> */}
            <div id="movieDetails" className="min-h-screen mb-8">
                <DetailsSections id={id} />
            </div>
            {/* <!-- Similar Movies Section --> */}
            <div className="my-24">
                <SimilarMovies id={id} />
            </div>
        </div>
    )
}

export default DetailsPage
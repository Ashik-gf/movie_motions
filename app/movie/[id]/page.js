import { getAllmovies } from "@/app/api/route";

const { default: DetailsPage } = require("@/app/components/DetailsPage")
export async function generateMetadata({ params: { id } }) {
    const data = await getAllmovies(id);
    const imageUrl = `https://image.tmdb.org/t/p/original${data.poster_path}`
    return {
        title: `${data?.original_title}`,
        description: data.overview,
        openGraph: {
            images: [imageUrl]
        }
    }
}
const MoveDetailsPage = async ({ params: { id } }) => {
    return (
        <div>
            <DetailsPage id={id} />
        </div>
    )
}

export default MoveDetailsPage
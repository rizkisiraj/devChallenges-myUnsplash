import dumpData from "../../dumpData";
import Photo from "../Photo/photo.component";

const PhotosWrapper = () => {
    return (
        <main className="px-24 grid gap-11 grid-cols-gallery auto-rows-[250px] grid-flow-dense content-center justify-between">
            {
                dumpData.map(pict => {
                    return <Photo pict={pict} key={pict.id} />
                })
            }
        </main>
    )
}

export default PhotosWrapper;
import {ThumbnailProps} from "./Thumbnail.props";
import Image from 'next/image'

export const Thumbnail = ({movie, ...props}: ThumbnailProps): JSX.Element => {
    return (
        <div {...props} className="relative h-28 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-195">
            <Image
                src={`https://image.tmdb.org/t/p/w500${
                    movie.backdrop_path || movie.poster_path
                }`}
                alt=""
                className="rounded-sm object-cover md:rounded"
                fill={true}
            />
        </div>
    )
}
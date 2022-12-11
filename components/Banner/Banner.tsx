import React from 'react'
import Image from 'next/image'
import {BannerProps} from "./Banner.props";
import {Movie} from "../../types/pages";
import {MOVIE_BASE_URL} from "../../utils/movie";

export const Banner = ({netflixOriginals}: BannerProps): JSX.Element => {
    const [movie, setMovie] = React.useState<Movie | null>(null)

    React.useEffect(() => {
        setMovie(netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)])
    }, [netflixOriginals])

    return (
        <div className="absolute top-0 left-0">
            <Image alt="" src={`${MOVIE_BASE_URL}${movie?.backdrop_path || movie?.poster_path}`} fill={true} />
        </div>
    )
}
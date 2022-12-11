import {DetailedHTMLProps, HTMLAttributes} from "react";
import {Movie} from "../../types/pages";

export interface ThumbnailProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    movie: Movie
}
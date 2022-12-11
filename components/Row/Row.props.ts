import {DetailedHTMLProps, HTMLAttributes} from "react";
import {Movie} from "../../types/pages";

export interface RowProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    title: string
    movies: Movie[]
}
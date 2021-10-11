import {createContext, ReactNode, useEffect, useState} from "react";
import { api } from "../services/api";

interface GenreResponseProps {
    id: number;
    name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
    title: string;
}

interface MovieProps {
    imdbID: string;
    Title: string;
    Poster: string;
    Ratings: Array<{
        Source: string;
        Value: string;
    }>;
    Runtime: string;
}

interface MoviesContextProviderProps {
    children: ReactNode
}

interface  MoviesContextProps {
    movies: MovieProps[];
    genres: GenreResponseProps[];
    selectedGenre: GenreResponseProps;
    selectedGenreId: number;
    handleClickButton: (id: number) => void;
}

export const moviesContext = createContext<MoviesContextProps>({} as MoviesContextProps);

export function MoviesContextProvider( { children } : MoviesContextProviderProps ){
    const [movies, setMovies] = useState<MovieProps[]>([])
    const [genres, setGenres] = useState<GenreResponseProps[]>([])
    const [selectedGenre, setSelectedGenre] = useState<GenreResponseProps>({} as GenreResponseProps)
    const [selectedGenreId, setSelectedGenreId] = useState(1)

    useEffect(() => {
        api.get('/genres')
            .then(response => { setGenres(response.data)})
    }, [])

    useEffect(() => {
        api.get(`movies/?Genre_id=${selectedGenreId}`)
            .then(response => {setMovies(response.data)});

        api.get(`genres/${selectedGenreId}`).then(response => {
            setSelectedGenre(response.data)
        })
    }, [selectedGenreId])

    function handleClickButton(id: number){
        setSelectedGenreId(id)
    }

    return (
        <moviesContext.Provider value={{ movies, genres, selectedGenre, selectedGenreId, handleClickButton }}>
            { children }
        </moviesContext.Provider>
    )
}
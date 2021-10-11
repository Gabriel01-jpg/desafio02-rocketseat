import { MovieCard } from "../MovieCard";
import {useContext, useState} from "react";
import {moviesContext, MoviesContextProvider} from "../moviesContext";
export function Content() {
    const { movies, selectedGenre } = useContext(moviesContext)
  return (
      <div className="container">
          <header>
              <span className="category">Categoria:<span> {selectedGenre.title}</span></span>
          </header>

          <main>
              <div className="movies-list">
                  {movies.map(movie => (
                      <MovieCard key ={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
                  ))}
              </div>
          </main>
      </div>
  )
}
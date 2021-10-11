import {Button} from "../Button";
import {useContext, useEffect, useState} from "react";
import {api} from "../../services/api";
import {moviesContext, MoviesContextProvider} from "../moviesContext";




export function SideBar() {
    const { genres, selectedGenreId, handleClickButton } = useContext(moviesContext)
    return (
        <div className="sidebar">
            <span>Watch<p>Me</p></span>

            <div className="buttons-container">
                {genres.map(genre => (
                    <Button
                        key={String(genre.id)}
                        title={genre.title}
                        iconName={genre.name}
                        onClick={() => handleClickButton(genre.id)}
                        selected={selectedGenreId === genre.id}
                    />
                ))}
            </div>
        </div>
        )
}
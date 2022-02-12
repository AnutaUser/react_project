import React from "react";
import {Link} from "react-router-dom";

const Movie = ({movie}) => {
    const {id, homepage, original_language, original_title, overview, popularity, poster_path} = movie;
    return (
        <div>
            <img src={`https://image.tmdb.org/t/p/w400${poster_path}`} alt={original_title}/>
            <h3>{original_title}</h3>
            <p>{homepage}</p>
            <p>Language: {original_language}</p>
            <p>{overview}</p>
            <p>Popularity: {popularity}</p>
            <Link to={id.toString()} state={movie}>
                <button>Movie details</button>
            </Link>
        </div>
    );
};

export {Movie};
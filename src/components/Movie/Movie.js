import React from "react";
import {Link} from "react-router-dom";

import css from "./Movie.module.css";

const Movie = ({movie}) => {
    const {id, original_title, overview, popularity, poster_path} = movie;
    return (
        <div className={css.Movie}>
            <img className={css.MovieImg} src={`https://image.tmdb.org/t/p/w400${poster_path}`} alt={original_title}/>
            <h3>{original_title}</h3>
            <p>{overview}</p>
            <h5>Popularity: {popularity}</h5>
            <Link to={id.toString()} state={movie}>
                <button className={css.MovieBtn}>Movie details</button>
            </Link>
        </div>
    );
};

export {Movie};
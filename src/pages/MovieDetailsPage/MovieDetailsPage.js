import React, {useEffect, useState} from "react";
import {Link, useLocation, useNavigate, useParams} from "react-router-dom";

import {Movie} from "../../components";
import {moviesService} from "../../services";
import  css from "./MovieDetails.module.css";

const MovieDetailsPage = () => {

    const {id} = useParams();
    const [movie, setMovie] = useState(null);
    const {state} = useLocation();

    useEffect(() => {
        if (state) {
            (setMovie(state));
            return;
        }
        moviesService.getById(id).then(value => setMovie([...value]));
    }, [id]);

    const navigate = useNavigate();
    const back = () => {
        navigate(-1)
    }

    return (
            <div>
                {movie && (
                    <div className={css.MovieDetails}>

                        <img src={`https://image.tmdb.org/t/p/w400${movie.backdrop_path}`} alt={movie.original_title}/>

                            <h2>{movie.original_title}</h2>
                            <p>Language: {movie.original_language}</p>
                            <p>Overview: {movie.overview}</p>
                            <h5>Popularity: {movie.popularity}</h5>
                            {/*<p>Production companies: {movie.production_companies}*/}
                            {/*    /!*<p>Logo: {movie.production_companies.logo_path}</p>*!/*/}
                            {/*    /!*<p>Name: {movie.production_companies.name}</p>*!/*/}
                            {/*    /!*<p>Country: {movie.production_companies.origin_country}</p>*!/*/}
                            {/*</p>*/}
                            <p>Release date: {movie.release_date}</p>
                            <p>Rating: {movie.vote_average}</p>
                            <p>Budget: {movie.budget}</p>
                            <p>Release date: {movie.release_date}</p>
                            <p>Revenue: {movie.revenue}</p>
                            <p>Runtime: {movie.runtime}</p>

                        <button onClick={back} className={css.MovieDetailsBtn}> ------------- Back to movies list ------------- </button>
                    </div>
                )}
            </div>
    );
};

export {MovieDetailsPage};
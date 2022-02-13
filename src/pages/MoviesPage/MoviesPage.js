import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {getAllMovies, getMoviesByPage} from "../../store";
import {Movie} from "../../components";
import moviesReducer from "../../store/movies.slice";
import css from "./Movies.module.css";

const MoviesPage = () => {

    const {movies, page, status, error} = useSelector(state => state['moviesReducer']);
    console.log(movies)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllMovies());
    }, []);

    return (
        <div>
            {status === "pending" && <h1>Loading......</h1>}
            {error && <h2>{error}</h2>}
            <div className={css.Movies}>
                {movies.map(movie => <Movie key={movie.id} movie={movie}/>)}
            </div>
        </div>
    );

};

export {MoviesPage};
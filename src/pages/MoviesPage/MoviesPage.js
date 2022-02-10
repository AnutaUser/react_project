import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {getAllMovies} from "../../store";
import {Movie} from "../../components";


const MoviesPage = () => {

    const {movies} = useSelector(state => state['movieReducer']);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllMovies());
    }, []);

    return (
        <div>
            {movies.map(movie => <Movie key={movie.id} movie={movie}/>)}
        </div>
    );

};

export {MoviesPage};
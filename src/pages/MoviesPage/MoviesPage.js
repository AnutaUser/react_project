import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {getAllMovies, getMoviesByPage} from "../../store";
import {Movie} from "../../components";


const MoviesPage = () => {

    const {movies, page} = useSelector(state => state['movieReducer']);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllMovies());
    }, []);

    return (
        <div>
            <div>
                {movies.map(movie => <Movie key={movie.id} movie={movie}/>)}
            </div>
            <div>
                <button onClick={()=> dispatch(getMoviesByPage({data:'previous'}))}>Previous page</button>
                <button onClick={()=>dispatch(getMoviesByPage({data: 'next'}))}>Next page</button>
            </div>
        </div>
    );

};

export {MoviesPage};
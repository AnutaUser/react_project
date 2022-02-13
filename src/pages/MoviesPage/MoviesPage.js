import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {getAllMovies, getMoviesByPage} from "../../store";
import {Movie} from "../../components";
import movieReducer from "../../store/movie.slice";

const MoviesPage = () => {

    const {movies, page, status, error} = useSelector(state => state['movieReducer']);
    console.log(movies)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllMovies());
    }, []);

    return (
        <div>
            {status === "pending" && <h1>Loading......</h1>}
            {error && <h2>{error}</h2>}
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
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import css from "./Genres.module.css";
import genresReducer, {getAllGenres} from "../../store/genres.slice";
import {Genre} from "../../components";

const GenresPage = () => {

    const {genres, status, error} = useSelector(state => state.genresReducer);
    console.log(genres)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllGenres());
    }, [])

    return (
        <div className={css.Genres}>

            {status === "pending" && <h1>Loading......</h1>}
            {error && <h2>{error}</h2>}

            <h1>20th Century Studios Movies</h1>

            {genres.map(genre => <Genre key={genre.id} genre={genre}/>)}

        </div>
    );
};

export {GenresPage};
import React from "react";
import {NavLink, Outlet} from "react-router-dom";

import css from "./Genres.module.css";

const GenresPage = () => {
    return (
        <div className={css.Genres}>
            <h1>20th Century Studios Movies</h1>
            <NavLink to={'*'}>Featured</NavLink>
            <NavLink to={'*'}>Action/Adventure</NavLink>
            <NavLink to={'*'}>Comedy</NavLink>
            <NavLink to={'*'}>Crime/Mystery</NavLink>
            <NavLink to={'*'}>Drama</NavLink>
            <NavLink to={'*'}>Horror</NavLink>
            <NavLink to={'*'}>Romance</NavLink>
            <NavLink to={'*'}>Science Fiction</NavLink>
            <NavLink to={'*'}>Suspense/Thriller</NavLink>
            <Outlet/>
        </div>
    );
};

export {GenresPage};
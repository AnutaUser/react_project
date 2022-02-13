import React from "react";
import {Route, Routes} from "react-router-dom";

import {GenresPage, HomePage, MovieDetailsPage, MoviesPage, NotFoundPage} from "./pages";
import {Layout} from "./components";
import css from "./App.module.css";

const App = () => {
    return (
        <div className={css.App}>
            <Routes>

                <Route path={'/'} element={<Layout/>}>

                    <Route path={'/'} element={<HomePage/>}/>

                    <Route path={'movies'} element={<MoviesPage/>}/>
                    <Route path={'movies/:id'} element={<MovieDetailsPage/>}/>
                    <Route path={'genres'} element={<GenresPage/>}/>

                    <Route path={'*'} element={<NotFoundPage/>}/>

                </Route>

            </Routes>
        </div>
    );
};

export default App;

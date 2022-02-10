import React from "react";
import {Route, Routes} from "react-router-dom";

import {GenresPage, HomePage, MoviesPage, NotFoundPage} from "./pages";
import {Layout} from "./components";
import css from "./App.module.css";

const App = () => {
    return (
        <div className={css.App}>
            <Routes>

                <Route path={'/'} element={<Layout/>}>

                    <Route path={'/'} element={<HomePage/>}/>

                    <Route path={'movies'} element={<MoviesPage/>}>ALL MOVIES</Route>
                    <Route path={'genres'} element={<GenresPage/>}>ALL GENRES</Route>

                    <Route path={'*'} element={<NotFoundPage/>}/>

                </Route>

            </Routes>
        </div>
    );
};

export default App;

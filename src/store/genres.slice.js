import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {genresService} from "../services";
import {logDOM} from "@testing-library/react";


export const getAllGenres = createAsyncThunk(
    "genresSlice/getAllGenres",
    async (_, {rejectedWithValue}) => {
        try {
            const genres = await genresService.getAll();
            return console.log(genres);
        }catch (e) {
            return rejectedWithValue(e.message);
        }
    }
);

const genresSlice = createSlice({
    name: "genresSlice",
    initialState: {
        genres: [],
        status: null,
        error: null
    },
    reducers: {

    },
    extraReducers: {
        [getAllGenres.pending]: (state, action) => {
            state.status = "pending"
            state.error = null
        },
        [getAllGenres.fulfilled]: (state, action) => {
            state.status = "fulfilled"
            state.movies = action.payload
        },
        [getAllGenres.rejected]: (state, action) => {
            state.status = "rejected"
            state.error = action.payload
        }

    }
});

const genresReducer = genresSlice.reducer;

export default genresReducer;
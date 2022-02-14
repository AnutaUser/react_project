import axios from "axios";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {moviesService} from "../services";

export const getAllMovies = createAsyncThunk(
    "moviesSlice/getAllMovies",
    async (_, {rejectWithValue})=> {
        try {
            const movies = await moviesService.getAll();
            return movies;
        } catch (e) {
            return rejectWithValue(e.message);
        }
    }
);

export const getSingleMovieById = createAsyncThunk(
    'moviesSlice/getSingleMovieById',
    async ({id}, {dispatch, rejectWithValue}) => {
        try {
            const singleMovie = await moviesService.getById(id)
            dispatch(getSingleMovieById({data: singleMovie}))

        } catch (e) {
            return rejectWithValue(e.message);
        }
    }
);

const initialState = {
    movies: [],
    movie: {},
    page: 1,
    status: null,
    error: null
}

const moviesSlice = createSlice({
    name:"moviesSlice",
    initialState,
    reducers: {
        getMovies: (state, action) => {
            state.movies = state.action.payload.movies
        },
        getSingleMovie: (state, action) => {
            state.movie = action.payload.data
        },
        getMoviesByPage: (state, action) => {
            if (action.payload.data === 'previous') {
                state.page = state.page - 1
                if (state.page < 1) {
                    state.page = 1
                }
            } else {
                state.page = state.page +1
            }
        }
    },

    extraReducers: {
        [getAllMovies.pending]: (state, action) => {
            state.status = "pending"
            state.error = null
        },
        [getAllMovies.fulfilled]: (state, action) => {
            state.status = "fulfilled"
            state.movies = action.payload
        },
        [getAllMovies.rejected]: (state, action) => {
            state.status = "rejected"
            state.error = action.payload
        }
    }
})

const moviesReducer = moviesSlice.reducer;

export default moviesReducer;
export const {getMovies, getSingleMovie, getMoviesByPage} = moviesSlice.actions;
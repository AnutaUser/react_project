import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {moviesService} from "../services";

export const getAllMovies = createAsyncThunk(
    "movieSlice/getAllMovies",
    async (page, {dispatch, rejectWithValue})=> {
        try {
            const movies = await moviesService.getAll();
            return console.log(movies);
        } catch (e) {
            return rejectWithValue(e.message);

        }
    }
);

export const getSingleMovieById = createAsyncThunk(
    'movieSlice/getSingleMovieById',
    async ({id}, {dispatch}) => {
        try {
            const singleMovie = await moviesService.getById(id)
            dispatch(getSingleMovieById({data: singleMovie}))

        } catch (e) {
            console.log(e)
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

const movieSlice = createSlice({
    name:"movieSlice",
    initialState,
    reducers: {
        getMovies: (state, action) => {
            state.movies = state.action.payload.movies
        },
        getSingleMovie: (state, action) => {
            state.movie = action.payload.data
        },
        getMoviesByPage: (state, action) => {
            if (action.payload.data === 'previos') {
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

const movieReducer = movieSlice.reducer;

export default movieReducer;
export const {getMovies, getSingleMovie, getMoviesByPage} = movieSlice.actions;
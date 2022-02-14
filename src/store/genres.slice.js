import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {genresService} from "../services";

export const getAllGenres = createAsyncThunk(
    "genresSlice/getAllGenres",
    async (_, {rejectWithValue})=> {
        try {
            const genres = await genresService.getAll();
            return console.log(genres);
        } catch (e) {
            return rejectWithValue(e.message);
        }
    }
);

const initialState =  {
    genres: [],
    status: null,
    error: null
}

const genresSlice = createSlice({
    name: "genresSlice",
    initialState,
    reducers: {
        getGenres: (state, action) => {
            state.genres = state.action.payload.genres
        }
    },
    extraReducers: {
        [getAllGenres.pending]: (state, action) => {
            state.status = "pending"
            state.error = null
        },
        [getAllGenres.fulfilled]: (state, action) => {
            state.status = "fulfilled"
            state.genres = action.payload
        },
        [getAllGenres.rejected]: (state, action) => {
            state.status = "rejected"
            state.error = action.payload
        }

    }
});

const genresReducer = genresSlice.reducer;

export default genresReducer;
export const {getGenres} = genresSlice.actions;
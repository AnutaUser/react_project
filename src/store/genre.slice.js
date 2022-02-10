import {createSlice} from "@reduxjs/toolkit";

const genreSlice = createSlice({
    name: "genreSlice",
    initialState: {
        genres: []
    },
    reducers: {

    }
});

const genreReducer = genreSlice.reducer;

export default genreReducer;
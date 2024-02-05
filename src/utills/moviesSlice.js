import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name : "movies",
    initialState : {
        nowPlayingMovies : null,
        trailerVideo : null,
        topRatedMovies : null,
        upcomingMovies: null,
    },
    reducers : {
        addTrailerVideo : (state,action) =>{
            state.trailerVideo = action.payload
        },
        addnowPlayingMovies : (state,action) =>{
            state.nowPlayingMovies = action.payload
        },
        addTopRatedMovies : (state,action) =>{
            state.topRatedMovies = action.payload
        },
        addUpcomingMovies : (state,action) =>{
            state.upcomingMovies = action.payload
        },
        
    }

}
)

export const {addnowPlayingMovies,addTrailerVideo,addTopRatedMovies,addUpcomingMovies} = moviesSlice.actions
export default moviesSlice.reducer;
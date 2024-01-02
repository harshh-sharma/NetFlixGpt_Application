import { createSlice } from "@reduxjs/toolkit"  
const movieSlice = createSlice({
    name:'movies',
    initialState:{
        nowPlayingMovies:null,
        trailerData:null
    },
    reducers:{
        addNowPlayingMovies : (state,action) => {
            state.nowPlayingMovies = action.payload ;
        },
        addTrailerData: (state,action) => {
            state.trailerData = action.payload;
        }
    }
})

export const {addNowPlayingMovies ,addTrailerData} = movieSlice.actions;
export default movieSlice.reducer;
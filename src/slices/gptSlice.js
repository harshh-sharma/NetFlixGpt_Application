import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name:'gpt',
    initialState:{
        showSearchPage:false
    },
    reducers:{
        addGptSearchPageToogle : (state) => {
            state.showSearchPage = !(state.showSearchPage);
        }
    }
})

export const {addGptSearchPageToogle} = gptSlice.actions;
export default gptSlice.reducer;
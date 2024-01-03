import { configureStore } from "@reduxjs/toolkit";
import movieSlice from "../slices/movieSlice";
import gptSlice from "../slices/gptSlice";
import configSlice from "../slices/configSlice";

export const appStore = configureStore({
    reducer:{
        movies : movieSlice,
        gpt : gptSlice,
        config : configSlice
    }
})
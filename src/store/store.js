import { configureStore } from "@reduxjs/toolkit";
import movieSlice from "../slices/movieSlice";

export const appStore = configureStore({
    reducer:{
        movies : movieSlice
    }
})
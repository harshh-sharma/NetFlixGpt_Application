import { useDispatch } from 'react-redux';
import { addTrailerData } from '../slices/movieSlice';
import React, { useEffect, useState } from 'react';

const useTrailer = (movieId) => {
    const dispatch = useDispatch();
    const vedios = async () => {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=f825d05797db5954947889fd3c10e8e1`);
        const json = await response.json();
        const trailerList = json.results.filter(vedio => vedio.type == 'Trailer');
        const trailer = trailerList[0];
        dispatch(addTrailerData(trailer));
    }
    useEffect(() => {
        vedios();
    },[])
}

export default useTrailer;
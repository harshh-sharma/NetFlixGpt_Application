import React from 'react'
import VedioBackground from './VedioBackground'
import VedioTitle from './VedioTitle'
import { useSelector } from 'react-redux'

const MainContainer = () => {
    const mainMovies = useSelector((store) => store.movies.nowPlayingMovies);
    if(!mainMovies) return;
    const {original_title,overview,id} = mainMovies[10];
  return (
    <div>
        <VedioTitle title={original_title} overview={overview}/>
        <VedioBackground movieId={id}/>
    </div>
  )
}

export default MainContainer
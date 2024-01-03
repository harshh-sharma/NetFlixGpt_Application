import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";

const SecondaryContainer = () => {
  const nowPlayingMovies = useSelector(store => store.movies.nowPlayingMovies);
  const popularMovies = useSelector(store => store.movies.popularMovies);
  const topRatedMovies = useSelector(store => store.movies.topRatedMovies);
  const upcomingMovies = useSelector(store => store.movies.upcomingMovies);
  return (
    <div className='w-full bg-slate-900'>
        <div className='w-full -mt-60 z-50'>
           <MovieList title={'Now Playing Movies'} moviesData={nowPlayingMovies}/>
           <MovieList  title={'Popular movies'} moviesData={popularMovies}/>
           <MovieList  title={'TopRated Movies'} moviesData={topRatedMovies}/>
           <MovieList  title={'Upcoming Movies'} moviesData={upcomingMovies}/>
        </div>
    </div>
  )
}

export default SecondaryContainer
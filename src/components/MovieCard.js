import React from 'react'
import { IMAGE_CDN_URL } from '../utils/constants'

const MovieCard = ({moviesData}) => {
    const {poster_path} = moviesData;
    console.log(poster_path);
  return (
    <div className="inline-block cursor-pointer hover:scale-105 ease-in-out duration-300 px-1">
        <div className='w-48 z-10 rounded-md '>
            <img src={IMAGE_CDN_URL+poster_path} alt='image' className=''/>
        </div>
    </div>
  )
}

export default MovieCard
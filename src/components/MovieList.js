import React, { useRef } from "react";
import MovieCard from "./MovieCard";
import { useSelector } from "react-redux";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
const MovieList = ({ title, moviesData }) => {
  const settings = {
    dots:false,
    infinite:true,
    speed:500,
    slideToShow:3,
    slideToScroll:3
  }
  const sliderLeft = () => {
    // let slider = document.getElementsById('slider');
    // slider.scrollLeft = slider.scrollLeft - 500;
  }
  let slider = useRef();
  const sliderRight = () => {
    slider.scrollLeft = slider.scrollLeft + 500;
  }
  return moviesData && <div className='relative px-5'>
    <h1 className="text-[#ff2505] font-bold font-mono text-3xl py-5 pl-14">{title}</h1>
    <div className="relative flex items-center gap-2 px-3 py-1">
    <IoIosArrowDropleftCircle size={40} className="text-[#ff2520] hover:text-[#ff2520] cursor-pointer opacity-70 hover:opacity-100" onClick={sliderLeft}/>
    <Slider {...settings}>
    <div className="w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide">
      {moviesData.map(movie => <MovieCard moviesData={movie}/>)}
    </div>
    </Slider>
    <IoIosArrowDroprightCircle size={40} className="text-[#ff2520] hover:text-[#ff2520] cursor-pointer opacity-70 hover:opacity-100" onClick={sliderRight}/>
    </div>
  </div>;
};

export default MovieList;

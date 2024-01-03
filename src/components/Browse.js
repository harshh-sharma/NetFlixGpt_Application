import React, { useEffect } from "react";
import Header from "./Header";
import useNowPlayingMovies from "../customHooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../customHooks/usePopularMovies";
import useTopRatedMovies from "../customHooks/useTopRated";
import useUpComingMovies from "../customHooks/useUpcomingMovies";
import { useSelector } from "react-redux";
import SearchPage from "./SearchPage";

const Browse = () => {
  const toogle = useSelector((store) => store.gpt.showSearchPage);
  console.log(toogle);
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpComingMovies();
  return (
    <div className="w-full">
      <Header />
      {toogle ? (
        <SearchPage />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;

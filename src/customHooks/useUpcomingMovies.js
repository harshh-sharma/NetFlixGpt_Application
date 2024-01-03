import { API_OPTIONS, url } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addPopularMovies, addUpcomingMovies } from "../slices/movieSlice";
import { useEffect } from "react";

const useUpComingMovies = () => {
  const dispatch = useDispatch();
  const fetchMovies = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?api_key=f825d05797db5954947889fd3c10e8e1"
    );
    const jsonData = await response.json();
    dispatch(addUpcomingMovies(jsonData.results));
  };
  useEffect(() => {
    fetchMovies();
  }, []);
};

export default useUpComingMovies;

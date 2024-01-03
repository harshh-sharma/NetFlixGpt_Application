import { API_OPTIONS, url } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addPopularMovies, addTopRatedMovies } from "../slices/movieSlice";
import { useEffect } from "react";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const fetchMovies = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=f825d05797db5954947889fd3c10e8e1"
    );
    const jsonData = await response.json();
    dispatch(addTopRatedMovies(jsonData.results));
  };
  useEffect(() => {
    fetchMovies();
  }, []);
};

export default useTopRatedMovies;
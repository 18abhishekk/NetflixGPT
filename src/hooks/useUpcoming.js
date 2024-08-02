import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { useSelector } from "react-redux";
const useUpcoming = () => {
  const dispatch = useDispatch();
  const upComingMovies = useSelector((store) => store.movies.upComingMovies);
  const getUpcomingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addUpcomingMovies(json.results));
  };
  useEffect(() => {
    if (!upComingMovies) getUpcomingMovies();
  }, []);
};

export default useUpcoming;

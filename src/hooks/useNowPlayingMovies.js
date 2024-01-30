import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utills/constants";
import { addnowPlayingMovies } from "../utills/moviesSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    console.log(json);
    dispatch(addnowPlayingMovies(json.results));
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};


export default useNowPlayingMovies;
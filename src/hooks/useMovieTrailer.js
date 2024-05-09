import { useEffect } from "react";
import { API_OPTIONS } from "../utills/constants";
import { addTrailerVideo } from "../utills/moviesSlice";
import { useDispatch } from "react-redux";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  const getMoviesVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    // console.log(json);
    const filtereddata = json.results.filter(
      (video) => video.type === "Trailer"
    );
    // console.log(filtereddata);
    const trailer =
      filtereddata.length === 0 ? filtereddata[0] : json.results[0];
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    getMoviesVideos();
  }, []);
};

export default useMovieTrailer;

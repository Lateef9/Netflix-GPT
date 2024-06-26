import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="text-white pl-10">
      <h1 className=" py-4 text-3xl ">{title}</h1>

      <div className="flex overflow-x-auto no-scrollbar">
        <div className="flex ">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} data={movie}/>
          ))}
        </div>
      </div>
    </div>

  );
};

export default MovieList;

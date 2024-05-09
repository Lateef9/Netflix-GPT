import React, { useState } from "react";
import { IMG_CDN_URL } from "../utills/constants";
import MovieInfo from "./MovieInfo";

const MovieCard = ({ posterPath, data }) => {
  const [showDetails, setShowDetails] = useState(false);


  const handleOnclick = () => {
    setShowDetails(true);
  };

  const handleClose = () => {
    setShowDetails(false);
  };

  if (!posterPath) return null;

  return (
    <>
      <div className="w-48 pr-4 cursor-pointer" onClick={handleOnclick}>
        <img src={IMG_CDN_URL + posterPath} alt="Movie card" />
      </div>
      {showDetails  && <MovieInfo data={data} onClose={handleClose} />}
    </>
  );
};

export default MovieCard;

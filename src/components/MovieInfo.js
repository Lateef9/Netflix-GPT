import React, { useEffect } from "react";
import { IMG_CDN_URL } from "../utills/constants";
import { IoIosCloseCircle } from "react-icons/io";
import { SlCalender } from "react-icons/sl";
import { FaStar } from "react-icons/fa6";

const MovieInfo = ({ data, onClose }) => {
  console.log(data);
  const {
    poster_path,
    title,
    release_date,
    vote_average,
    overview,
    backdrop_path,
  } = data;
  const formattedReleaseDate = new Date(release_date).toLocaleDateString(
    "en-GB"
  );

  useEffect(() => {
    document.body.classList.add("overflow-hidden");
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  return (
    <div className="fixed inset-2 bg-black flex flex-row">
      <img
        className="absolute w-screen h-screen object-cover -z-10 filter blur-sm brightness-75"
        src={IMG_CDN_URL + backdrop_path}
        alt=""
      />
      <div className="w-1/4 mt-40 ml-16">
        <img
          className="w-64 rounded-md"
          src={IMG_CDN_URL + poster_path}
          alt="Movie poster"
        />
      </div>
      <div className="flex w-2/4 mt-40">
        <div className="left-0">
          <button
            className="absolute top-0 right-0 mr-4 mt-4 text-6xl text-red-700"
            onClick={onClose}
          >
            <IoIosCloseCircle />
          </button>
          <h5 className="py-2 text-white font-extrabold text-6xl">{title}</h5>
          <div className="py-1 flex items-center font-semibold">
            <span>
              <SlCalender />
            </span>
            <div className="text-white px-2">{formattedReleaseDate}</div>
          </div>

          <div className="py-1 flex items-center font-semibold">
            <span className="text-yellow-400"><FaStar /></span>
            <div
              className={` pl-2  text-white ${
                vote_average >= 5 ? "text-green-500" : "text-red-500"
              }`}
            >
              {vote_average.toFixed(1)}/10
            </div>
          </div>

          <div className="py-4">
            <h2 className="text-2xl  text-white mb-2 font-extrabold ">
              Overview
            </h2>
            <div className="pt-1 rounded-md  text-white">
              <p className="text-sm md:text-base">{overview}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieInfo;

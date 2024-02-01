import React, { useEffect } from 'react'
import { API_OPTIONS } from '../utills/constants'

const VideoBackground = ({movieId}) => {

    const getMoviesVideos = async() =>{
        const data = await fetch('https://api.themoviedb.org/3/movie/572802/videos?language=en-US', API_OPTIONS)
        const json =  await data.json();
        console.log(json)
        const trailer = json.filter

    };


    useEffect(() => {
        getMoviesVideos()
    },[])

  return (
    <div>VideoBackground</div>
  )
}

export default VideoBackground
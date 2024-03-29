import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='w-screen aspect-video pt-[20%] px-12 absolute text-white bg-gradient-to-r from-black'>
        <h1 className='text-2xl font-bold '>{title}</h1>
        <p className='py-4 text-sm w-2/4'>{overview}</p>
        <div className=''>
            <button className='bg-white text-black py-2 px-12  text-xl rounded-md items-center hover:bg-opacity-80'> Play</button>
            <button className='bg-gray-500 text-white py-2  px-12  text-xl bg-opacity-50 rounded-md items-center mx-2'> More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle
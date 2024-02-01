import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='pt-36 px-12'>
        <h1 className='text-4xl font-bold '>{title}</h1>
        <p className='py-6 text-lg w-2/4'>{overview}</p>
        <div className=''>
            <button className='bg-gray-500 text-white py-4 px-12 w-12 text-xl bg-opacity-50 rounded-md items-center'> Play</button>
            <button className='bg-gray-500 text-white py-4 px-12 w-12 text-xl bg-opacity-50 rounded-md items-center mx-2'> Info</button>
        </div>
    </div>
  )
}

export default VideoTitle
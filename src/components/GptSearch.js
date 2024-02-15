import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptSuggestMovies from './GptSuggestMovies'

const GptSearch = () => {
  return (
    <div className='bg-gray-800 '>
      <GptSearchBar  />
      <GptSuggestMovies />
    </div>
  )
}

export default GptSearch
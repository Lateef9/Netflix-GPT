import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'

const GptSuggestMovies = () => {

  const gpt = useSelector(store =>store.gpt)
  const {movieNames,movieResults} = gpt
  if(!movieNames) return null;

  return (
    <div className="p-4 m-4 bg-gray-800">
      <div className=''>
        {movieNames.map((movieName, index) => (
          <MovieList
            key={movieName}
            title={movieName}
            movies={movieResults[index]}
          />
        ))}
      </div>
    </div>
  )
}

export default GptSuggestMovies
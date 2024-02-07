import React from 'react'

const GptSearchBar = () => {
  return (
    <div className='pt-[8%] flex justify-center'>
        <form  className=' w-1/2 bg-black grid grid-cols-12'  onSubmit={(e) => {e.preventDefault()}}>
            <input type="text"  className="p-3 m-3 col-span-9" placeholder='what do you want to watch today?' />
            <button className='py-3 px-3 m-3 bg-red-700 rounded-lg text-white col-span-3 '>Search</button>
        </form>
    </div>
  )
}

export default GptSearchBar
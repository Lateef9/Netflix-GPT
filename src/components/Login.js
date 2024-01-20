import React from 'react'
import Header from './Header'

const Login = () => {
  return (
    <div>
      <Header />
      <div className='absolute'>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/16006346-87f9-4226-bc25-a1fb346a2b0c/9662d0fd-0547-4665-b887-771617268815/IN-en-20240115-popsignuptwoweeks-perspective_alpha_website_large.jpg" 
        alt="Backgrounlogo" 
        />
      </div>

      <form className='w-3/12  my-36 mx-auto left-0 right-0 absolute bg-black p-12 text-white rounded-lg bg-opacity-80'>
      <h1 className='my-4 text-3xl font-bold'>Sign In</h1>
      <input type="text" placeholder='Enter Email Address' className='p-3 my-4 w-full bg-gray-700 ' />
      <input type="password" placeholder='Enter Password' className='p-3 my-4 w-full bg-gray-700 ' />
      <button className='p-3 my-4 w-full bg-red-700 rounded-lg'> Sign In</button> 
      </form>

    </div>
  )
}

export default Login
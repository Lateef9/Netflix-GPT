import React from 'react'
import { auth } from '../utills/firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { removeUser } from '../utills/userSlice';
const Header = () => {
  const navigate = useNavigate();
  const dispatch =useDispatch();
  const user = useSelector( store => store.user);

 const handleSignout = () => {
  signOut(auth).then(() => {
    dispatch(removeUser());
    navigate("/")
    }).catch((error) => {
    // An error happened. build error page
  });
  
 }


  return (
    <div className='absolute py-4 px-8  w-screen bg-gradient-to-b from-black z-10  flex justify-between'>
      <img className='w-48' 
           src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" 
           alt="Logo" 
      />
      
      {user && 
        <div className='flex items-center'>
        <img className='w-10 h-10' src={user?.photoURL} alt="User-Logo" />
        <button className='m-2 font-bold text-white' onClick={handleSignout}>Sign Out</button>
      </div>}
      
    </div>
  )
}

export default Header
import React, { useEffect, useState } from "react";
import { auth } from "../utills/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utills/userSlice";
import { logo } from "../utills/constants";
import { toggleGptSearchView } from "../utills/gptSlice";
import { photoAvatar, dropdownavatar } from "../utills/constants";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropup } from "react-icons/io";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const [isdropDownOpen, setisdropDownOpen] = useState(false);
  const toggleDropDown = () => {
    setisdropDownOpen(!isdropDownOpen);
    console.log(isdropDownOpen);
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in,
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoAvatar,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out

        dispatch(removeUser());
        navigate("/");
      }
    });
  }, []);

  const handleSignout = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        // An error happened. build error page
      });
  };

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };

  return (
    <div className="absolute py-4 px-8  w-screen bg-gradient-to-b from-black z-10  flex justify-between">
      <img className="w-40 " src={logo} alt="Logo" />

      {user && (
        <div>
          <div className="flex items-center">
            <button
              className="bg-purple-600 text-white py-2 px-4 mx-4 rounded-md"
              onClick={handleGptSearchClick}
            >
              {showGptSearch ? "HomePage" : "GPT Search"}
            </button>
            <img
              className="w-10 h-10 cursor-pointer"
              onClick={toggleDropDown}
              src={user?.photoURL}
              alt="User-Logo"
            />

            <button
              className="m-2 font-bold text-white text-2xl"
              onClick={toggleDropDown}
            >
              {isdropDownOpen ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
            </button>

            {isdropDownOpen ? (
              <div className="absolute flex flex-col mt-[12%] w-48 right-14 py-4">
                <span className="text-white text-2xl absolute -mt-4 right-6 ">
                  <IoMdArrowDropup />
                </span>
                <div className="  rounded-md  text-white bg-black p-4 mt-0">
                  <div className="p-1 flex ">
                    <img
                      className="text-xs pr-3 "
                      src={dropdownavatar}
                      alt=""
                    />
                    <span className="text-xl">{user.displayName}</span>
                  </div>
                  <div class="border-t my-3 border-gray-500"></div>
                  <button className="flex mx-auto" onClick={handleSignout}>
                    Signout
                  </button>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;

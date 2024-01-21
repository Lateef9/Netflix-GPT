import React, { useState, useRef } from "react";
import Header from "./Header";
import { checkValidData } from "../utills/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utills/firebase";

const Login = () => {
  const [isSignInForm, setisSignInForm] = useState(true);
  const [errorMessage, seterrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handleSignButton = () => {
    const message = checkValidData(email.current.value, password.current.value);
    seterrorMessage(message);

    if (message) {
      return;
    }

    //Sign Up
    if(!isSignInForm){
    createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        const user = userCredential.user;
        // console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        seterrorMessage(errorCode + errorMessage);
      });
    }
    else{
    //Sign In

    signInWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user)
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        seterrorMessage(errorCode + errorMessage);
      });
  };
}

  const toggleSignInForm = () => {
    setisSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/16006346-87f9-4226-bc25-a1fb346a2b0c/9662d0fd-0547-4665-b887-771617268815/IN-en-20240115-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="Backgrounlogo"
        />
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="w-3/12  my-36 mx-auto left-0 right-0 absolute bg-black p-12 text-white rounded-lg bg-opacity-80"
      >
        <h1 className="my-4 text-3xl font-bold">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Enter Full Name"
            className="p-3 my-4 w-full bg-gray-700 "
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Enter Email Address"
          className="p-3 my-4 w-full bg-gray-700 "
        />
        <input
          ref={password}
          type="password"
          placeholder="Enter Password"
          className="p-3 my-4 w-full bg-gray-700 "
        />
        <button
          className="p-3 my-4 w-full bg-red-700 rounded-lg"
          onClick={handleSignButton}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="my-2 text-lg font-bold text-red-700">{errorMessage}</p>
        <p className="my-2 p-1 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already a User? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
